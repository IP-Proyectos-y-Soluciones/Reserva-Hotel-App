<<<<<<< HEAD
const { DataTypes } = require('sequelize');
 

module.exports = (sequelize) => { 
sequelize.define('users', {
  id_u: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    primaryKey: true,
    allowNull: false,
  },
  name: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  password: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  email: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  photo: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  mode: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  check: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  encrypted_email: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  date: {
    type: DataTypes.TIMESTAMP,
    defaultValue: DataTypes.NOW,
    allowNull: false,
  },
});
}

=======
const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define(
    "users",
    {
      // Define los atributos del modelo
      // ...
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
        allowNull: false,
      },
      name: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      password: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      email: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      photo: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      mode: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      check: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      encrypted_email: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      date: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW,
        allowNull: false,
      },
    },
    { timestamps: false }
  );
};
>>>>>>> 6b3d96a525363a5d3491920ddc19de95deff531a
