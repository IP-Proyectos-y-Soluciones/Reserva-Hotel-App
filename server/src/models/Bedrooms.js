import { DataTypes } from 'sequelize';
import sequelize from '../config/db'; 

const Bedrooms = sequelize.define('bedrooms', {
  id_h: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    primaryKey: true,
    allowNull: false,
  },
  kind_h: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  style: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  gallery: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  video: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  virtual_tour: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  description_h: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  date_h: {
    type: DataTypes.TIMESTAMP,
    defaultValue: DataTypes.NOW,
    allowNull: false,
  },
});

export default Bedrooms;