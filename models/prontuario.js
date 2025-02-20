'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Prontuario extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Prontuario.init({
    pacienteId: DataTypes.INTEGER,
    medicoId: DataTypes.INTEGER,
    observacoes: DataTypes.TEXT,
    data: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'Prontuario',
  });
  return Prontuario;
};