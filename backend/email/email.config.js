import nodemailer from 'nodemailer';
import { ENV_VARS } from '../config/envVars.js';

const sendEmail=async(params)=>{
    const mailTransporter=nodemailer.createTransport({
        host:ENV_VARS.SMTP_HOST,
        PORT:ENV_VARS.SMTP_PORT,
        secure:ENV_VARS.SMTP_SECURE,
        service:ENV_VARS.SMTP_SERVICE,
        auth:{
            user:ENV_VARS.SMTP_MAIL,
            pass:ENV_VARS.SMTP_PASSWORD
        }
    });

    const mailOptions={
        from:ENV_VARS.SMTP_MAIL,
        to:params.email,
        subject:params.subject,
        html:params.message
    };

    await mailTransporter.sendMail(mailOptions);
};

export default sendEmail;