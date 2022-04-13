const express = require('express');

const { validateBlogPost } = require('../middlewares/validateBlogPost');
const { authMiddleware } = require('../middlewares/authMiddleware');
const BlogPostController = require('../controllers/blogPostController');

const blogPostRouter = express.Router();

blogPostRouter
  .post('/', authMiddleware, validateBlogPost, BlogPostController.create);
  // .get('/', authMiddleware, BlogPostController.getAll)
  // .get('/:id', authMiddleware, BlogPostController.getById);

module.exports = blogPostRouter;
