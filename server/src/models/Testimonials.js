const { DataTypes } = require('sequelize');


module.exports = (sequelize) => { 
sequelize.define(
  'testimonials', {
  id_testimony: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    primaryKey: true,
    allowNull: false,
  },
  id_res: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  is_us: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  is_room: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  testimony: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  approved: {
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
