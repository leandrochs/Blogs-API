module.exports = (sequelize, DataTypes) => {
  const BlogPost = sequelize.define('BlogPost', {
      title: { type: DataTypes.STRING, allowNull: false },
      content: { type: DataTypes.STRING, allowNull: false },
      userId: { type: DataTypes.INTEGER, foreignKey: true },
      published: { type: DataTypes.DATE },
      updated: { type: DataTypes.DATE },
    },
    { timestamps: false,
      tableName: 'BlogPosts',
    });

  BlogPost.associate = (models) => {
    BlogPost.belongsTo(models.User, {
      as: 'user',
      foreignKey: 'userId',
    });
  };

  return BlogPost;
};
