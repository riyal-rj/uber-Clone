import { User } from "../models/user.model.js";
import { BlacklistToken } from "../models/blacklistToken.model.js";
import jwt from 'jsonwebtoken';
import { ENV_VARS } from "../config/envVars.js";
import { Captain } from "../models/captain.model.js";


export const authUser = async (req, res, next) => {
    try {
        const token = req.cookies['glidego-jwt'] || req.headers.authorization?.split(' ')[1];
        if (!token) {
            return res.status(401).json({
                status:'Failed',
                message:'Unauthorized access'
            });
        }
        const isBlacklisted=await BlacklistToken.findOne({token:token});
        if(isBlacklisted){
            return res.status(401).json({
                status:'Failed',
                message:'Unauthorized access'
            });
        }
        const decoded=jwt.verify(token,ENV_VARS.JWT_SECRET_TOKEN);
        const user=await User.findById(decoded.id);
        if(!user){
            return res.status(401).json({
                status:'Failed',
                message:'Unauthorized access'
            });
        }
        req.user=user;
        return next();
    } catch (error) {
        console.log(error);
        res.status(401).json({
            status:'Failed',
            message:'Unauthorized access'
        });
    }
}

export const authCaptain = async (req, res, next) => {
    try {
        const token = req.cookies['glidego-jwt'] || req.headers.authorization?.split(' ')[1];
        if (!token) {
            return res.status(401).json({
                status:'Failed',
                message:'Unauthorized access'
            });
        }
        const isBlacklisted=await BlacklistToken.findOne({token:token});
        if(isBlacklisted){
            return res.status(401).json({
                status:'Failed',
                message:'Unauthorized access'
            });
        }
        const decoded=jwt.verify(token,ENV_VARS.JWT_SECRET_TOKEN);
        const captain=await Captain.findById(decoded.id);
        if(!captain){
            return res.status(401).json({
                status:'Failed',
                message:'Unauthorized access'
            });
        }
        req.captain=captain;
        return next();
    } catch (error) {
        console.log(error);
        res.status(401).json({
            status:'Failed',
            message:'Unauthorized access'
        });
    }
}