const express = require('express');

const { validateUser } = require('../middlewares/validateUser');
const UserController = require('../controllers/userController');

const userRouter = express.Router();

userRouter.post('/', validateUser, UserController.create);

module.exports = userRouter;
