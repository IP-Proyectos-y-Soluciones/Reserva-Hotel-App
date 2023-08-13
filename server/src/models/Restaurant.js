import { DataTypes } from 'sequelize';
import sequelize from '../config/db'; // Asegúrate de ajustar la ruta

const Restaurant = sequelize.define('restaurant', {
  // Define los atributos del modelo
  // ...
});

export default Restaurant;