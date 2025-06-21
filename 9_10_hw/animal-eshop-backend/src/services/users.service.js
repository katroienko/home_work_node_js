import bcrypt from "bcrypt";

import User from "../db/User.js";

import HttpExeption from "../utils/HttpExeption.js";

export const addAdmin = async (payload) => {
    const hashPassword = await bcrypt.hash(payload.password, 10);
    return User.create({
        ...payload,
        password: hashPassword,
        role: "admin",
    });
};

export const changeAdminPassword = async (id, { oldPassword, newPassword }) => {
    const admin = await User.findByPk(id);
    if (!admin) return null;

    const passwordCompare = await bcrypt.compare(oldPassword, admin.password);
    if (!passwordCompare) throw HttpExeption(400, "Old password invalid");

    const hashPassword = await bcrypt.hash(newPassword, 10);
    admin.password = hashPassword;
    await admin.save();

    return admin;
}


// для обычного пользователя.
export const addUser = async (payload) => {
    const hashPassword = await bcrypt.hash(payload.password, 10);
    return User.create({
        ...payload,
        password: hashPassword,
        role: "user",
    });
};

export const changeUserPassword = async (id, { oldPassword, newPassword }) => {
    const user = await User.findByPk(id);
    if (!user) return null;

    const passwordCompare = await bcrypt.compare(oldPassword, user.password);
    if (!passwordCompare) throw HttpExeption(400, "Old password invalid");

    const hashPassword = await bcrypt.hash(newPassword, 10);
    user.password = hashPassword;
    await user.save();

    return user;
};



export const userChangeEmail = async (id, { oldEmail, newEmail }) => {
    const user = await User.findByPk(id);
    if (!user) throw HttpExeption(404, "User not found");

    const normalizedOld = oldEmail.trim().toLowerCase();
    const normalizedCurrent = user.email.trim().toLowerCase();

    if (normalizedOld !== normalizedCurrent) {
        throw HttpExeption(400, "Old email is incorrect");
    }

    user.email = newEmail.trim().toLowerCase();
    await user.save();
    return user;
};


export const deleteOwnAccount = async (id) => {
  const user = await User.findByPk(id);
  if (!user) return null;

  await user.destroy();
  return true;
};