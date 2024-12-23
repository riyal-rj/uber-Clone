import dotenv from 'dotenv';

dotenv.config();

const DB_URI=process.env.MONGO_URI.replace('<db_password>',process.env.MONGO_PASSCODE);
export const ENV_VARS={
    MONGO_URI:DB_URI,
    PORT:process.env.SERVER_PORT_NO||2900 ,
    JWT_SECRET_TOKEN:process.env.JWT_SECRET_TOKEN,
    NODE_ENV:process.env.NODE_ENV,
    SMTP_HOST:process.env.SMTP_HOST,
    SMTP_PORT:process.env.PORT || 2900,
    SMTP_MAIL:process.env.SMTP_MAIL,
    SMTP_PASSWORD:process.env.SMTP_PASSWORD,
    SMTP_SERVICE:process.env.SMTP_SERVICE
};