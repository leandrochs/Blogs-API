const express = require('express');

const { validateUser } = require('../middlewares/validateUser');
const UserController = require('../controllers/userController');

const router = express.Router();

router.post('/', validateUser, UserController.create);

module.exports = router;
