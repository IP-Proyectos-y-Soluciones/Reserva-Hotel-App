const { DataTypes } = require('sequelize');


module.exports = (sequelize) => { 
sequelize.define(
  'diary',
   {
  id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    primaryKey: true,
    allowNull: false,
  },
  id_room: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  admission_date: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  departure_date: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
});
}
