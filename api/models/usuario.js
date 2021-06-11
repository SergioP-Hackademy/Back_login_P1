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
      type: DataTypes.STRING,
      validate: {
        isAlpha: true, 
      },
    },
    apellido: {
      type: DataTypes.STRING,
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