import * as usersService from "../services/users.service.js";

import validateBody from "../utils/validateBody.js";

import { 
  adminAddSchema, 
  adminChangePasswordSchema,
  userAddSchema,
  userChangePasswordSchema,
  userChangeEmailSchema,
  } from "../validation/users.schema.js";

import HttpExeption from "../utils/HttpExeption.js";

export const addAdminController = async (req, res) => {
  await validateBody(adminAddSchema, req.body);
  const result = await usersService.addAdmin(req.body);

  res.status(201).json({
    message: `user with email ${result.email}`,
  });
};

export const changeAdminPasswordController = async(req, res)=> {
  await validateBody(adminChangePasswordSchema, req.body);
  const {id} = req.params;
  const result = await usersService.changeAdminPassword(id, req.body);
  if(!result) throw HttpExeption(404, `Admin with id=${id} not found`);

  res.json({
    message: "Password change successfully"
  });
}


// для обычного пользователя
export const addUserController = async (req, res) => {
  await validateBody(userAddSchema, req.body);
  const result = await usersService.addUser(req.body);

  res.status(201).json({
    message: `user with email ${result.email} registered`,
  });
};

export const changeUserPasswordController = async(req, res)=> {
  await validateBody(userChangePasswordSchema, req.body);
  const {id} = req.params;
  const result = await usersService.changeUserPassword(id, req.body);
  if(!result) throw HttpExeption(404, `User with id=${id} not found`);

  res.json({
    message: "Password change successfully"
  });
};


export const changeUserEmailController = async (req, res) => {
  await validateBody(userChangeEmailSchema, req.body);

  const { id } = req.params;
  const result = await usersService.userChangeEmail(id, req.body);

  if (!result) {
    throw HttpExeption(404, `User with id=${id} not found`);
  }

  res.json({
    message: "Email updated successfully",
    user: result,
  });
};

export const deleteOwnAccountController = async (req, res) => {
  const { id } = req.user;
  const result = await usersService.deleteOwnAccount(id);
  if (!result) throw HttpExeption(404, "User not found");

  res.json({ message: "Account deleted successfully" });
};