const express = require('express');

const { validateCategory } = require('../middlewares/validateCategory');
const { authMiddleware } = require('../middlewares/authMiddleware');
const CategoriesController = require('../controllers/categoriesController');

const categoriesRoutes = express.Router();

categoriesRoutes
  .post('/', authMiddleware, validateCategory, CategoriesController.create)
  .get('/', authMiddleware, CategoriesController.getAll);

module.exports = categoriesRoutes;
