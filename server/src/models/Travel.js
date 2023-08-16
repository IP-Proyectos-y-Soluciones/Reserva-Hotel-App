import { DataTypes } from 'sequelize';
import sequelize from '../config/db'; 

const Travel = sequelize.define('travel', {
  id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    primaryKey: true,
    allowNull: false,
  },
  photo_small: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  big_photo: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  title: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  description: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  date: {
    type: DataTypes.TIMESTAMP,
    defaultValue: DataTypes.NOW,
    allowNull: false,
  },
});

export default Travel;
