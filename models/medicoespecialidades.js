'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class medicoespecialidades extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  medicoespecialidades.init({
    id: DataTypes.INTEGER,
    id_medico: DataTypes.INTEGER,
    id_especialidade: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'medicoespecialidades',
  });
  return medicoespecialidades;
};