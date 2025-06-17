import * as usersService from '../services/users.service.js'
import bcrypt from 'bcrypt';

import validateBody from "../utils/validateBody.js"
import User from '../db/User.js';

import { userAddSchema, userChangePasswordSchema } from '../validation/users.schema.js'
import { createToken } from '../utils/token.js'
import HttpException from '../utils/HttpException.js';

// export const addUserController = async (req, res)=>{
// await validateBody(userAddSchema, req.body);
// const result = await usersService.addUser(req.body);

// res.status(201).json({
//     message: `user with email ${result.email} registered`
// });
// };
export const addUserController = async (req, res) => {
    try {
        await validateBody(userAddSchema, req.body);

        const existingUser = await User.findOne({ where: { email: req.body.email } });
        if (existingUser) {
            return res.status(400).json({ message: `User with email ${req.body.email} already exists` });
        }

        const result = await usersService.addUser(req.body);

        res.status(201).json({
            message: `User with email ${result.email} registered successfully`,
        });
    } catch (error) {
        // Здесь можно добавить более точную обработку ошибок в зависимости от валидации или сервиса
        res.status(500).json({ message: error.message || 'Server error' });
    }
};

// export const changeUserPaswordController = async(req, res)=> {
//   await validateBody(userChangePasswordSchema, req.body);
//   const {id} = req.params;
//   const result = await usersService.changeUserPassword(id, req.body);
//   if(!result) throw HttpException(404, `User with id=${id} not found`);

//   res.json({
//     message: "Password change successfully"
//   });
// }

export const changeUserPaswordController = async (req, res) => {
  await validateBody(userChangePasswordSchema, req.body);

  const { id } = req.params;

  // Преобразуем id к числу для корректного сравнения
  if (Number(req.user.id) !== Number(id) && !["admin", "superadmin"].includes(req.user.role)) {
    throw HttpException(403, "You can only change your own password");
  }

  const result = await usersService.changeUserPassword(id, req.body);

  if (!result) {
    throw HttpException(404, `User with id=${id} not found`);
  }

  res.json({
    message: "Password changed successfully",
  });
};

export const loginController = async (req, res) => {
    const { email, password } = req.body;

    const user = await User.findOne({ where: { email } });

    if (!user) throw HttpException(401, 'Invalid email or password');

    const isPasswordValid = await bcrypt.compare(password, user.password);

    if (!isPasswordValid) throw HttpException(401, 'Invalid email or password');

    if (user.mustChangePassword) {
        return res.status(403).json({
            message: 'Password must be changed',
            forceChange: true,
        });
    }

    const token = createToken(user); // функция создания JWT токена

    res.json({
        token,
        user: {
            id: user.id,
            email: user.email,
            role: user.role,
        },
    });
};
