const Sequelize = require('sequelize');
const { BlogPost, PostsCategories, User, Categories } = require('../models');
const config = require('../config/config');

const sequelize = new Sequelize(config.development);

const create = async ({ title, content, categoryIds, userId }) => {
  try {
    const created = await sequelize.transaction(async (t) => {
      const post = await BlogPost.create({ title, content, userId }, { transaction: t });
      
      await Promise.all(
        categoryIds.map(async (catId) =>
          PostsCategories.create(
            { postId: post.id, categoryId: catId },
            { transaction: t },
          )),
      );

      return post;
    });
    
    return created;
  } catch (error) {
    console.error(error);
    return error;
  }
};

const getAll = async () => {
  try {
    const blogPost = await BlogPost.findAll({
      include: [{
        model: User,
        as: 'user',
        attributes: { exclude: ['password'] },
      },
      {
        model: Categories,
        as: 'categories',
        through: { attributes: [] },
      }],
    });
    return blogPost;
  } catch (error) {
    console.log(error.message);
    return error;
  }
};

// const getById = async (id) => {
//   try {
//     const user = await BlogPost.findOne({
//       attributes: ['id', 'displayName', 'email', 'image'],
//       where: { id },
//     });
//     return user;
//   } catch (error) {
//     console.error(error.message);
//     return error;
//   }
// };

module.exports = {
  create,
  getAll,
  // getById,
};