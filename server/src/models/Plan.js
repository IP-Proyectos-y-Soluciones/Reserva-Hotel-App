import { DataTypes } from 'sequelize';
import sequelize from '../config/db'; // Asegúrate de ajustar la ruta

const Plan = sequelize.define('plan', {
  // Define los atributos del modelo
  // ...
});

export default Plan;