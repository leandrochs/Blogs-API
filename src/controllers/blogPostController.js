const BlogPostService = require('../service/blogPostService');

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
    return res.status(500).json({ message: 'Internal server error' });
  }
};

const getAll = async (req, res) => {
  try {
    const posts = await BlogPostService.getAll();

    // if (posts.error) {
    //   return res.status(posts.error).json({ message: posts.message });
    // }

    return res.status(200).json(posts);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'Internal server error' });
  }
};

// const getById = async (req, res) => {
//   try {
//     const { id } = req.params;

//     const blogPost = await BlogPostService.getById(id);

//     if (!blogPost) {
//       return res.status(404).json({ message: 'User does not exist' });
//     }

//     return res.status(200).json(blogPost);
//   } catch (error) {
//     console.error(error);
//     return res.status(404).json({ message: 'Internal server error' });
//   }
// };

module.exports = {
  create,
  getAll,
  // getById,
};
