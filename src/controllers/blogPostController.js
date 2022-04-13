const BlogPostService = require('../service/blogPostService');

const defaultServerErrorMessage = { message: 'Internal server error' };

const create = async (req, res) => {
  try {
    const { title, content, categoryIds } = req.body;
    const userId = req.user.id;

    const blogPost = await BlogPostService.create({ title, content, categoryIds, userId });

    if (blogPost.message && blogPost.message.indexOf('a foreign key constraint fails') !== -1) {
      return res.status(400).json({ message: '"categoryIds" not found' });
    }
    
    return res.status(201).json(blogPost);
  } catch (error) {
    console.error(error);
    return res.status(500).json(defaultServerErrorMessage);
  }
};

const getAll = async (req, res) => {
  try {
    const posts = await BlogPostService.getAll();
    return res.status(200).json(posts);
  } catch (error) {
    console.error(error);
    return res.status(500).json(defaultServerErrorMessage);
  }
};

const getById = async (req, res) => {
  try {
    const { id } = req.params;

    const blogPost = await BlogPostService.getById(id);

    if (!blogPost) {
      return res.status(404).json({ message: 'Post does not exist' });
    }

    return res.status(200).json(blogPost);
  } catch (error) {
    console.error(error);
    return res.status(404).json(defaultServerErrorMessage);
  }
};

const update = async (req, res) => {
  try {
    const { id } = req.params;
    const { title, content } = req.body;
    const loggedInUser = req.user.id;

    const hasPost = await BlogPostService.getById(id);

    if (!hasPost) return res.status(404).json({ message: 'Post does not exist' });
    
    if (hasPost && hasPost.userId !== loggedInUser) {
      return res.status(401).json({ message: 'Unauthorized user' });
    }

    const editedBlogPost = await BlogPostService.update({ title, content, id });

    return res.status(200).json(editedBlogPost);
  } catch (error) {
    console.error(error);
    return res.status(404).json(defaultServerErrorMessage);
  }
};

const deleteById = async (req, res) => {
  try {
    const { id } = req.params;
    const loggedInUser = req.user.id;

    const hasPost = await BlogPostService.getById(id);

    if (!hasPost) return res.status(404).json({ message: 'Post does not exist' });
    
    if (hasPost && hasPost.userId !== loggedInUser) {
      return res.status(401).json({ message: 'Unauthorized user' });
    }

    await BlogPostService.deleteById(id);

    return res.sendStatus(204);
  } catch (error) {
    console.error(error);
    return res.status(404).json(defaultServerErrorMessage);
  }
};

const search = async (req, res) => {
  try {
    if (!req.query.q || req.query.q === '') {
      const posts = await BlogPostService.getAll();
      return res.status(200).json(posts);
    }

    const postByTitle = await BlogPostService.getPostByTitle(req.query.q);
    
    if (postByTitle.length !== 0) return res.status(200).json(postByTitle);

    const postByContent = await BlogPostService.getPostByContent(req.query.q);
    return res.status(200).json(postByContent);
  } catch (error) {
    console.error(error);
    return res.status(500).json(defaultServerErrorMessage);
  }
};

module.exports = {
  create,
  getAll,
  getById,
  update,
  deleteById,
  search,
};
