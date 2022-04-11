module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define(
    'User',
    {
      id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
      displayName: DataTypes.STRING,
      email: { type: DataTypes.STRING, isEmail: true, unique: true },
      password: DataTypes.STRING,
      image: { type: DataTypes.STRING, isUrl: true },
    },
    {
      timestamps: false,
      tableName: 'Users',
      // underscored: true,
    },
  );

  return User;
};
