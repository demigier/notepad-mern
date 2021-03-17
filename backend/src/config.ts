import dotenv from 'dotenv';
dotenv.config();


export default {
    MONGO_DB: process.env.MONGO_DB || 'notepad',
    MONGO_USER: process.env.MONGO_USER || 'admin',
    MONGO_PASS: process.env.MONGO_PASS ||  'admin',
    MONGO_HOST: process.env.MONGO_HOST || 'localhost' || 'http://192.168.0.133',
    PORT: process.env.PORT || 3000
}