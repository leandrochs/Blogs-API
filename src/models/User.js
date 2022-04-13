module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define(
    'User',
    {
      displayName: { type: DataTypes.STRING, allowNull: false },
      email: { type: DataTypes.STRING, isEmail: true, unique: true },
      password: { type: DataTypes.STRING, allowNull: false },
      image: { type: DataTypes.STRING, isUrl: true },
    },
    { timestamps: false, tableName: 'Users' },
  );

  User.associate = (models) => {
    User.hasMany(models.BlogPost, {
      as: 'blogPosts',
      foreignKey: 'userId',
    });
  };

  return User;
};
