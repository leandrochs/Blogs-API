const express = require('express');

const { validateBlogPost } = require('../middlewares/validateBlogPost');
const { validateUpdateBlogPost } = require('../middlewares/validateUpdateBlogPost');
const { authMiddleware } = require('../middlewares/authMiddleware');
const BlogPostController = require('../controllers/blogPostController');

const blogPostRouter = express.Router();

blogPostRouter
  .post('/', authMiddleware, validateBlogPost, BlogPostController.create)
  .get('/', authMiddleware, BlogPostController.getAll)
  .get('/:id', authMiddleware, BlogPostController.getById)
  .put('/:id', authMiddleware, validateUpdateBlogPost, BlogPostController.update)
  .delete('/:id', authMiddleware, BlogPostController.deleteById);

module.exports = blogPostRouter;
