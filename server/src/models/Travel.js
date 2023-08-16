import { DataTypes } from 'sequelize';
import sequelize from '../config/db'; // Asegúrate de ajustar la ruta

const Travel = sequelize.define('travel', {
  // Define los atributos del modelo
  // ...
  id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    primaryKey: true,
    autoIncrement: true,
  },
  photo_small: DataTypes.TEXT,
  big_photo: DataTypes.TEXT,
  title: DataTypes.TEXT,
  description: DataTypes.TEXT,
  date: {
    type: DataTypes.TIMESTAMP,
    defaultValue: DataTypes.NOW,
  },
});

export default Travel;