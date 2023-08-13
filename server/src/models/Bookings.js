import { DataTypes } from 'sequelize';
import sequelize from '../config/db'; // Asegúrate de ajustar la ruta

const Bookings = sequelize.define('bookings', {
  // Define los atributos del modelo
  // ...
});

export default Bookings;