const { DataTypes } = require('sequelize');


module.exports = (sequelize) => { 
sequelize.define(
  'categories',
   {
  id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    primaryKey: true,
    allowNull: false,
  },
  route: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  color: {
    type: DataTypes.TEXT,
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
  inludes: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  continental_alta: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  continental_baja: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  americano_alta: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  americano_baja: {
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