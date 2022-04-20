'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('especialidades', {

      id_especialidade: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER(11)
      },
      nm_especialidade: {
        type: Sequelize.STRING(120)
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('especialidades');
  }
};