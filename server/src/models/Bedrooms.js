import { DataTypes } from 'sequelize';
import sequelize from '../config/db'; // Asegúrate de ajustar la ruta

const Bedrooms = sequelize.define('bedrooms', {
  // Define los atributos del modelo
  // ...
  id_h: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  kind_h: DataTypes.TEXT,
  style: DataTypes.TEXT,
  gallery: DataTypes.TEXT,
  video: DataTypes.TEXT,
  virtual_tour: DataTypes.TEXT,
  description_h: DataTypes.TEXT,
  date_h: {
    type: DataTypes.TIMESTAMP,
    defaultValue: DataTypes.NOW,
  },
});

export default Bedrooms;