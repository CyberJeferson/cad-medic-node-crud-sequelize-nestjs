'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class medicos extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  medicos.init({
    id_medico: DataTypes.INTEGER,
    nm_medico: DataTypes.STRING,
    num_crm: DataTypes.INTEGER,
    num_telfixo: DataTypes.INTEGER,
    num_celular: DataTypes.INTEGER,
    num_cep: DataTypes.INTEGER,
    nm_rua: DataTypes.STRING,
    num_rua: DataTypes.INTEGER,
    nm_bairro: DataTypes.STRING,
    nm_localidade: DataTypes.STRING,
    sg_uf: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'medicos',
  });
  return medicos;
};