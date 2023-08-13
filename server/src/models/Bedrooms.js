import { DataTypes } from 'sequelize';
import sequelize from '../config/db'; // Asegúrate de ajustar la ruta

const Bedrooms = sequelize.define('bedrooms', {
  // Define los atributos del modelo
  // ...
});

export default Bedrooms;