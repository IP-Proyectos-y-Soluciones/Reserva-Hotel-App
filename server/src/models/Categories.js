import { DataTypes } from 'sequelize';
import sequelize from '../config/db'; // Asegúrate de ajustar la ruta

const Categories = sequelize.define('categories', {
  // Define los atributos del modelo
  // ...
});

export default Categories;