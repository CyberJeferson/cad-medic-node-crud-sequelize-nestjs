'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('medicoespecialidades', {

      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      id_medico: {
        type: Sequelize.INTEGER(11),
        references: {        
          model: 'medicos',
          key: 'id_medico'
        }

      },
      id_especialidade: {
        type: Sequelize.INTEGER(11),
        references: {         
          model: 'especialidades',
          key: 'id_especialidade'
        }
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
    await queryInterface.dropTable('medicoespecialidades');
  }
};