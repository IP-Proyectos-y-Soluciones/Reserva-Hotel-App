<<<<<<< HEAD
const { DataTypes } = require('sequelize');
import bcrypt from 'bcrypt';

module.exports = (sequelize) => {
sequelize.define(
  'administrators', {
  id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    primaryKey: true,
    allowNull: false, // Cambio: Agregar allowNull
  },
  profile: {
    type: DataTypes.TEXT,
    allowNull: false, // Cambio: Agregar allowNull
  },
  name: {
    type: DataTypes.TEXT,
    allowNull: false, // Cambio: Agregar allowNull
  },
  user: {
    type: DataTypes.TEXT,
    allowNull: false, // Cambio: Agregar allowNull
  },
  password: {
    type: DataTypes.TEXT,
    allowNull: false, // Cambio: Agregar allowNull
  },
  status: {
    type: DataTypes.INTEGER,
    allowNull: false, // Cambio: Agregar allowNull
  },
  date: {
    type: DataTypes.TIMESTAMP,
    defaultValue: DataTypes.NOW,
    allowNull: false, // Cambio: Agregar allowNull
  },
});

// Callback para encriptar la contraseña antes de guardar
Administrator.beforeCreate(async (administrator, options) => {
  const saltRounds = 10;
  const hashedPassword = await bcrypt.hash(administrator.password, saltRounds);
  administrator.password = hashedPassword;
});
}
=======
const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define(
    "administrator",
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
        allowNull: false, // Cambio: Agregar allowNull
      },
      profile: {
        type: DataTypes.TEXT,
        allowNull: false, // Cambio: Agregar allowNull
      },
      name: {
        type: DataTypes.TEXT,
        allowNull: false, // Cambio: Agregar allowNull
      },
      user: {
        type: DataTypes.TEXT,
        allowNull: false, // Cambio: Agregar allowNull
      },
      password: {
        type: DataTypes.TEXT,
        allowNull: false, // Cambio: Agregar allowNull
      },
      status: {
        type: DataTypes.INTEGER,
        allowNull: false, // Cambio: Agregar allowNull
      },
      date: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW,
        allowNull: false, // Cambio: Agregar allowNull
      },
    },
    { timestamps: false }
  );
};

// Callback para encriptar la contraseña antes de guardar
// Administrator.beforeCreate(async (administrator, options) => {
//   const saltRounds = 10;
//   const hashedPassword = await bcrypt.hash(administrator.password, saltRounds);
//   administrator.password = hashedPassword;
// });
>>>>>>> 6b3d96a525363a5d3491920ddc19de95deff531a
