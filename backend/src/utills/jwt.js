import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';

dotenv.config();

const JWT_SECRET = process.env.JWT_ACCESS_TOKEN;

export const generateAccessToken = (userId) => {
    return jwt.sign({ id: userId }, JWT_SECRET, { expiresIn: '30d' });
}

export const verifyToken = (token) => {
    return jwt.verify(token, JWT_SECRET);
}