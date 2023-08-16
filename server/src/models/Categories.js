import { DataTypes } from 'sequelize';
import sequelize from '../config/db'; // Asegúrate de ajustar la ruta

const Categories = sequelize.define('categories', {
  // Define los atributos del modelo
  // ...
  id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    primaryKey: true,
    autoIncrement: true,
  },
  route: DataTypes.TEXT,
  color: DataTypes.TEXT,
  kind: DataTypes.TEXT,
  img: DataTypes.TEXT,
  description: DataTypes.TEXT,
  inludes: DataTypes.TEXT,
  continental_alta: DataTypes.TEXT,
  continental_baja: DataTypes.TEXT,
  americano_alta: DataTypes.TEXT,
  americano_baja: DataTypes.TEXT,
  date: {
    type: DataTypes.TIMESTAMP,
    defaultValue: DataTypes.NOW,
  },
});

export default Categories;