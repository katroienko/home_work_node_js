import { Router } from 'express';

import { addUserController,  changeUserPaswordController, loginController } from '../controllers/users.controller.js'
import { authenticate } from '../middlewares/authorization.js'

const usersRouter = Router();

usersRouter.post('/register', addUserController)

usersRouter.post('/login', loginController);

usersRouter.put('/change-password', authenticate, changeUserPaswordController)

export default usersRouter;