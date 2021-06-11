'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Usuario extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Usuario.init({
    email: {
      type: DataTypes.STRING,
      validate: {
        isEmail: true,
      },
    },
    nombre: {
      type: DataTypes.INTEGER,
      validate: {
        isAlpha: true, 
      },
    },
    apellido: {
      type: DataTypes.INTEGER,
      validate: {
        isAlpha: true, 
      },
    },
    password: DataTypes.STRING,
    role: DataTypes.STRING,
    telefono: {
      type: DataTypes.INTEGER,
      validate: {
        isNumeric: true,
        len: [7, 10],
      },
    },
    genero: DataTypes.STRING,
    fechaNacimiento: DataTypes.STRING,
    statusDelete: DataTypes.BOOLEAN,
  }, {
    sequelize,
    modelName: 'Usuario',
  });
  return Usuario;
};