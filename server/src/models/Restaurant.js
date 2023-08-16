import { DataTypes } from 'sequelize';
import sequelize from '../config/db'; // Asegúrate de ajustar la ruta

const Restaurant = sequelize.define('restaurant', {
  // Define los atributos del modelo
  // ...
  id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    primaryKey: true,
    autoIncrement: true,
  },
  img: DataTypes.TEXT,
  description: DataTypes.TEXT,
  date: {
    type: DataTypes.TIMESTAMP,
    defaultValue: DataTypes.NOW,
  },
});

export default Restaurant;