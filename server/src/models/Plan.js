import { DataTypes } from 'sequelize';
import sequelize from '../config/db'; // Asegúrate de ajustar la ruta

const Plan = sequelize.define('plan', {
  // Define los atributos del modelo
  // ...
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  kind: DataTypes.TEXT,
  img: DataTypes.TEXT,
  description: DataTypes.TEXT,
  hight_price: DataTypes.TEXT,
  low_price: DataTypes.TEXT,
  date: {
    type: DataTypes.TIMESTAMP,
    defaultValue: DataTypes.NOW,
  },
});

export default Plan;