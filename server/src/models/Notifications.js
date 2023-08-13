import { DataTypes } from 'sequelize';
import sequelize from '../config/db'; // Asegúrate de ajustar la ruta

const Notifications = sequelize.define('notifications', {
  // Define los atributos del modelo
  // ...
});

export default Notifications;