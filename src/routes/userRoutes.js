const express = require('express');

const { validateUser } = require('../middlewares/validateUser');
const { authMiddleware } = require('../middlewares/authMiddleware');
const UserController = require('../controllers/userController');

const userRouter = express.Router();

userRouter
  .post('/', validateUser, UserController.create)
  .get('/', authMiddleware, UserController.getAll)
  .get('/:id', authMiddleware, UserController.getById)
  .delete('/me', authMiddleware, UserController.deleteMe);

module.exports = userRouter;
