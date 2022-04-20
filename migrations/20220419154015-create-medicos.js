'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('medicos', {
  
      id_medico : {
        type: Sequelize.INTEGER(11),
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
    
      },
      nm_medico: {
        type: Sequelize.STRING(120),
        allowNull: false
      },
      num_crm: {
        type: Sequelize.INTEGER(8),
        allowNull: false,
        unique: true

        
      },
      num_telfixo: {
        type: Sequelize.INTEGER(12),
        allowNull: false
      },
      num_celular: {
        type: Sequelize.INTEGER(12),
        allowNull: false
      },
      num_cep:{
        type: Sequelize.INTEGER(8),
        allowNull: false,
      },
      nm_rua:{
        type: Sequelize.STRING(250),
        allowNull: false,
      },
      num_rua:{
        type: Sequelize.INTEGER(11),
        allowNull: false,
      
      },
      nm_bairro:{
        type: Sequelize.STRING(120),
        allowNull: false,
      },
      nm_localidade:{
        type: Sequelize.STRING(120),
        allowNull: false,
      },
      sg_uf:{
        type: Sequelize.STRING(2),
        allowNull: false
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      soft_delete:{
        allowNull: true,
        type: Sequelize.DATE
      }
    });
  

  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('medicos');
  }
};