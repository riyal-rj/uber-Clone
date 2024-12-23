import sendEmail from "./email.config.js"
import { VERIFY_EMAIL_TEMPLATE, WELCOME_MAIL_TEMPLATE } from "./email.template.js"

export const sendVerifyTokenEmail=async (username,email,verificationToken)=>{
    try {
        await sendEmail({
            email:email,
            subject:'Verify your Email',
            message:VERIFY_EMAIL_TEMPLATE.replace('{username}',username.firstname)
                                         .replace('{verificationCode}',verificationToken)
        });
        console.log('Verification Email sent succesfully to the user');
    } catch (error) {
        console.log(`Error sending the verification email: ${error}`);
        throw new Error(`Error sending verification email   ${error}`);
    }
};

export const sendWelcomeMail=async (email,username)=>{
    try {
        await sendEmail({
            email:email,
            subject:'Welcome Email',
            message:WELCOME_MAIL_TEMPLATE.replace('{username}',username.firstname+" "+username.lastname),
        });

        console.log('Welcome email sent successfully!');
    } catch (error) {
        console.log(`Error sending welcome email: ${error}`);
        throw new Error(`Error sending welcome email: ${error}`)
    }
}
