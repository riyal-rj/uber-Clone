import bcrypt from 'bcryptjs';

import { User } from "../models/user.model.js"
import { generateVerificationToken } from '../utils/generateVerificationtoken.js';
import { generateAndSetCookie } from '../utils/generateAndSetCookie.js';
import { sendVerifyTokenEmail, sendWelcomeMail } from '../email/emails.js';
import { BlacklistToken } from '../models/blacklistToken.model.js';
import { token } from 'morgan';

export const registerUser = async (req, res, next) => {
    const { firstname, lastname, email, password, phoneNo } = req.body;
    try {

        if (!firstname || !email || !password)
            return res.status(400).json({
                status: 'Failed',
                message: 'All fields are mandatory'
            });

        const isUserAlreadyByEmail = await User.findOne({ email: email });
        if (isUserAlreadyByEmail)
            return res.status(400).json({
                status: 'Failed',
                message: 'Email ID already exists. Go for a new Email ID.'
            });

        const isUserAlreadyByPhone = await User.findOne({ phone: phoneNo });
        if (isUserAlreadyByPhone)
            return res.status(400).json({
                status: 'Failed',
                message: 'Phone number already exists. Go for a new Phone number.'
            });

        const passcodeRegex = /^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
        if (!passcodeRegex.test(password))
            return res.status(400).json({
                status: 'Failed',
                message: 'Password must contain at least one uppercase letter, one number, and one special character',
            });

        const salt = await bcrypt.genSalt(12);
        const hashedPassword = await bcrypt.hash(password, salt);

        const verificationToken = generateVerificationToken();

        const newUser = await new User({
            email: email,
            username: {
                firstname,
                lastname
            },
            password: hashedPassword,
            phone: phoneNo,
            verificationToken: verificationToken,
            verificationTokenExpiresAt: Date.now() + 24 * 60 * 60 * 1000

        });

        generateAndSetCookie(res, newUser._id);

        await newUser.save();

        sendVerifyTokenEmail(newUser.username, newUser.email, verificationToken);

        res.status(201).json({
            status: 'success',
            message: 'Data succesfully added to the database',
            token: req.cookies['uber-jwt']||req.headers.authorization.split(' ')[1],
            user: {
                ...newUser._doc,
                password: undefined,
            }
        });

    } catch (error) {
        res.status(500).json({
            status: 'Failed',
            message: error.message
        });
    }
}

export const verifyEmail = async (req, res, next) => {
    try {
        const { code } = req.body;
        if (!code)
            return res.status(400).json({
                status: 'Failed',
                message: 'Please enter the verification code sent in your registered mail id.'
            });
        const user = await User.findOne(
            {
                verificationToken: code,
                verificationTokenExpiresAt: { $gt: Date.now() }
            });


        if (!user)
            return res.status(400).json(
                {
                    status: 'Failed',
                    message: 'Invalid Verification token or verfication token expired.'
                });

        user.isVerified = true,
            user.verificationToken = undefined;
        user.verificationTokenExpiresAt = undefined;

        await user.save();

        await sendWelcomeMail(user.email, user.username);

        res.status(200).json({
            status: 'success',
            message: 'Verification done successfully'
        });

    } catch (error) {
        res.status(500).json({
            status: 'Failed',
            message: error.message
        });
    }
}

export const loginUser = async (req, res, next) => {
    const { emailOrphone, password } = req.body;
    try {
        if (!emailOrphone || !password)
            return res.status(400).json({
                status: 'Failed',
                message: 'All the fields are mandatory!'
            });

        const user = await User.findOne({
            $or: [
                { email: emailOrphone },
                { phone: "+91" + emailOrphone }
            ]
        }).select('+password');

        if (!user) {
            return res.status(401).json({
                status: 'Failed',
                message: 'Invalid credentials entered or User details do not exist'
            });
        }

        const isPasswordValid = await bcrypt.compare(password, user.password);

        if (!isPasswordValid) {
            return res.status(401).json({
                status: 'Failed',
                message: 'You have entered the wrong password. Please enter the correct password'
            });
        }

        generateAndSetCookie(res, user._id);

        user.lastlogin = new Date();

        await user.save();

        res.status(200).json({
            status: 'Success',
            message: 'User logged in successfully',
            token: req.cookies['uber-jwt']||req.headers.authorization.split(' ')[1],
            user: {
                ...user._doc,
                password: undefined
            }
        });
    } catch (error) {
        res.status(500).json({
            status: 'Failed',
            message: error.message
        })
    }
}

export const logoutUser = async (req, res, next) => {
    try {
        res.clearCookie('uber-jwt');
        const token = req.cookies['uber-jwt'] || req.headers.authorization.split(' ')[1];

        if (!token)
            return res.status(401).json({
                status: 'Failed',
                message: 'Unauthorized access'
        });
        await BlacklistToken.create({ token });

        res.status(200).json({
            status: 'Success',
            message: 'User logged out successfully'
        });

    } catch (error) {
        res.status(500).json({
            status: 'Failed',
            message: error.message
        });
    }
}

export const getUserProfile = async (req, res, next) => {
    try {
        res.status(200).json({
            status: 'Success',
            user: req.user
        })
    } catch (error) {
        res.status(400).json({
            status: 'Failed',
            error: error.message
        })
    }
}