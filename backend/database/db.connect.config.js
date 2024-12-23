import mongoose from 'mongoose';
import { ENV_VARS } from '../config/envVars.js';


export const connectDB=async() => {
    try {
        const conn=await mongoose.connect(ENV_VARS.MONGO_URI);
        console.log('MongoDB connected .....   '+conn.connection.host);
    } catch (error) {
        console.log('Error in connecting the mongoDB  '+error.message);
        process.exit(1);//1 means error and 0 means success    
    }
}