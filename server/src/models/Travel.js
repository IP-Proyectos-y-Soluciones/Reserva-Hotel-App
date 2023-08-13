import { DataTypes } from 'sequelize';
import sequelize from '../config/db'; // Asegúrate de ajustar la ruta

const Travel = sequelize.define('travel', {
  // Define los atributos del modelo
  // ...
});

export default Travel;