

import express from 'express';
import { getUser, updateUser } from '../controllers/userController.js';

const userRouter = express.Router();

userRouter.get('/:id', getUser);
userRouter.put('/:id', updateUser);

export default userRouter;