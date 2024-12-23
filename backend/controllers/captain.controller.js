import {Captain} from '../models/captain.model.js';
import { generateAndSetCookie } from '../utils/generateAndSetCookie.js';
import bcrypt from 'bcryptjs';
import { BlacklistToken } from '../models/blacklistToken.model.js';


export const registerCaptain = async (req, res, next) => {
    const { firstname, lastname, email, password, phoneNo, vehicleColor,vehicleNumber,vehicleCapacity,vehicleType } = req.body;
    try {

        if (!firstname || !lastname || !email || !password || !phoneNo || !vehicleColor || !vehicleNumber || !vehicleCapacity || !vehicleType)
            return res.status(400).json({
                status: 'Failed',
                message: 'All fields are mandatory'
            });

        const isUserAlreadyByEmail = await Captain.findOne({ email: email });
        if (isUserAlreadyByEmail)
            return res.status(400).json({
                status: 'Failed',
                message: 'Email ID already exists. Go for a new Email ID.'
            });

        const isUserAlreadyByPhone = await Captain.findOne({ phone: phoneNo });
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

        const newCaptain = await new Captain({
            email: email,
            captainname: {
                firstname,
                lastname
            },
            password: hashedPassword,
            phone: phoneNo,
            vehicle: 
            {
                color: vehicleColor,
                number: vehicleNumber,
                capacity: vehicleCapacity,
                type: vehicleType
            }
        });

        generateAndSetCookie(res, newCaptain._id);

        await newCaptain.save();

        res.status(201).json({
            status: 'Success',
            message: 'Captain registered successfully',
            token:req.cookies['uber-jwt']||req.headers.authorization.split(' ')[1],
            captain: newCaptain
        });

    } catch (error) {
        res.status(500).json({
            status: 'Failed',
            message: error.message
        });

    }
}


export const loginCaptain = async (req, res, next) => {
    const { emailOrphone, password } = req.body;
    try {
        if (!emailOrphone || !password)
            return res.status(400).json({
                status: 'Failed',
                message: 'All fields are mandatory'
            });

        const captain = await Captain.findOne({ 
            $or: [
                { email: emailOrphone },
                { phone: emailOrphone }
            ]
        }).select('+password');

        if (!captain)
            return res.status(401).json({
                status: 'Failed',
                message: 'Invalid credentials or Captain not registered'
            });

        const isPasswordValid = await bcrypt.compare(password, captain.password);

        if (!isPasswordValid)
            return res.status(401).json({
                status: 'Failed',
                message: 'Invalid password entered. Please enter the correct password'
        });

        generateAndSetCookie(res, captain._id);

        res.status(200).json({
            status: 'Success',
            message: 'Captain logged in successfully',
            token:req.cookies['uber-jwt']||req.headers.authorization.split(' ')[1],
            captain: captain
        });

    } catch (error) {
        res.status(500).json({
            status: 'Failed',
            message: error.message
        });
    }
}

export const getCaptainProfile = async (req, res, next) => {
    try {
        res.status(200).json({ 
            status: 'Success',
            captain: req.captain
        });
    } catch (error) {
        res.status(500).json({
            status: 'Failed',
            message: error.message
        });        
    }
}

export const logoutCaptain=async(req,res,next)=>{
    try {
        res.clearCookie('uber-jwt');
        const token=req.cookies['uber-jwt'] || req.headers.authorization?.split(' ')[1];

        if(!token)
            return res.status(401).json({
                status:'Failed',
                message:'Unauthorized access'
            });

        await BlacklistToken.create({token});       

        res.status(200).json({
            status:'Success',
            message:'Captain logged out successfully'
        });
    } catch (error) {
        res.status(500).json({
            status:'Failed',
            message:error.message
        });
    }
}