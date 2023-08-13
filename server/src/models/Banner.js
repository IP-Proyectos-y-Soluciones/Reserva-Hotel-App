import { DataTypes } from 'sequelize';
import sequelize from '../config/db'; // Asegúrate de ajustar la ruta

const Banner = sequelize.define('banner', {
  // Define los atributos del modelo
  // ...
});

export default Banner;