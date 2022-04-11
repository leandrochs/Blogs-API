const express = require('express');

const { validateUser } = require('../middlewares/validateUser');
const { authMiddleware } = require('../middlewares/authMiddleware');
const UserController = require('../controllers/userController');

const userRouter = express.Router();

userRouter
  .get('/', authMiddleware, UserController.getAll)
  .post('/', validateUser, UserController.create);

module.exports = userRouter;
