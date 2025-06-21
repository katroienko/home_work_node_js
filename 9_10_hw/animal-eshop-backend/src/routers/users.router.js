import { Router } from "express";

import { 
    addAdminController,
    changeAdminPasswordController,
    addUserController, 
    changeUserPasswordController, 
    changeUserEmailController,
    deleteOwnAccountController
 } from "../controllers/users.controller.js";

import { authenticate, isSuperadmin } from "../middlewares/authorization.js";

const usersRouter = Router();

usersRouter.post("/admins", authenticate, isSuperadmin, addAdminController);
usersRouter.put("/admins/:id/password", authenticate, isSuperadmin, changeAdminPasswordController);


// роуты для обычного пользователя.
// регистрацыя
usersRouter.post("/users",  addUserController);
// смена пароля
usersRouter.put("/users/:id/password", authenticate,  changeUserPasswordController);

usersRouter.put("/users/:id/email", authenticate,  changeUserEmailController)
usersRouter.post("/users/:id/delete-account", authenticate, deleteOwnAccountController);

export default usersRouter;