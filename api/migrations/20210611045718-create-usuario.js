'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Usuarios', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      email: {
        type: Sequelize.STRING,
        require:[true, 'Se requiere añadir un email'],
        allowNull: false,
        unique: true
      },
      nombre: {
        type: Sequelize.STRING,
        require:[true, 'Se requiere añadir nombre'],
        allowNull: false
      },
      apellido: {
        type: Sequelize.STRING,
        require:[true, 'Se requiere añadir un apellido '],
        allowNull: false,
      },
      password: {
        type: Sequelize.STRING,
      },
      role: {
        type: Sequelize.STRING,
        defaultValue: 'Prospecto'
      },
      telefono: {
        type: Sequelize.STRING
      },
      genero: {
        type: Sequelize.STRING
      },
      fechaNacimiento: {
        type: Sequelize.STRING
      },
      statusDelete: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
        defaultValue: false
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
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Usuarios');
  }
};