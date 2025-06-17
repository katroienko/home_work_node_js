import bcrypt from 'bcrypt'
import User from '../db/User.js'
import HttpException from '../utils/HttpException.js';


export const addUser = async (payload) => {
    const hashPassword = await bcrypt.hash(payload.password, 10);
    return User.create({
        ...payload,
        password: hashPassword,
        role: "user",
    });

};

// export const changeUserPassword = async (id, {oldPassword, newPassword}) => {
//     const user = await User.findByPk(id);
//     if(!user) return null;

//     const passwordCompare = await bcrypt.compare(oldPassword, user.password);
//     if(!passwordCompare) throw HttpException(400, "Old password invalid");

//     const hashPassword = await bcrypt.hash(newPassword, 10);
//     user.password = hashPassword;
//     await user.save();

//     return user;
// }

export const changeUserPassword = async (id, { oldPassword, newPassword }) => {
    const user = await User.findByPk(id);
    if (!user) return null;

    const passwordCompare = await bcrypt.compare(oldPassword, user.password);
    if (!passwordCompare) {
        throw HttpException(400, "Old password is incorrect");
    }

    const hashedPassword = await bcrypt.hash(newPassword, 10);

    user.password = hashedPassword;
    user.mustChangePassword = false; // ✅ сбрасываем флаг
    await user.save();

    return user;
};