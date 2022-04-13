'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('BlogPosts', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      title: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      content: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      userId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
        // field: 'user_id',
        references: {
          model: 'Users',
          key: 'id',
        },
      },
      published: {
        type: Sequelize.DATE,
        // defaultValue: Sequelize.NOW,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),

      },
      updated: {
        type: Sequelize.DATE,
        allowNull: false,
        // defaultValue: Sequelize.NOW,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
      },
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('BlogPosts');
  },
};
