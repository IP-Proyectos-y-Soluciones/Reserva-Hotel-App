<<<<<<< HEAD
const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
 sequelize.define(
  'plan', {
  id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    primaryKey: true,
    allowNull: false,
  },
  kind: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  img: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  description: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  hight_price: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  low_price: {
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
    "plan",
    {
      // Define los atributos del modelo
      // ...
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
        allowNull: false,
      },
      kind: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      img: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      description: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      hight_price: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      low_price: {
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
