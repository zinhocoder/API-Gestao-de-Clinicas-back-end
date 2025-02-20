'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Financa extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Financa.init({
    descricao: DataTypes.STRING,
    valor: DataTypes.FLOAT,
    tipo: DataTypes.STRING,
    data: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'Financa',
  });
  return Financa;
};