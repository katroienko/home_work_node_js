import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';

const SECRET_KEY = process.env.JWT_SECRET || 'your_secret_key';

export const createToken = (user) => {
  return jwt.sign(
    {
      id: user.id,
      email: user.email,
      role: user.role,
    },
    SECRET_KEY,
    { expiresIn: '1h' }
  );
};
