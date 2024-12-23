import cookieParser from 'cookie-parser';
import express from 'express';

import morgan from 'morgan';
import cors from 'cors';
import userRoutes from './routes/user.route.js';
import captainRoutes from './routes/captain.route.js';
import { connectDB } from './database/db.connect.config.js';

const app=express();

app.use(express.json());//to parse the req.body

app.use(cookieParser());
app.use(cors())
app.use(morgan('dev'));//to see the request time

app.use('/api/user',userRoutes);
app.use('/api/captain',captainRoutes);

connectDB();
export default app;