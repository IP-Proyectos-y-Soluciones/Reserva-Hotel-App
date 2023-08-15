import { DataTypes } from 'sequelize';
import sequelize from '../config/db'; // Asegúrate de ajustar la ruta

const Bookings2 = sequelize.define('bookings2', {
  // Define los atributos del modelo
  // ...
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  id_room: DataTypes.TEXT,
  admission_date: DataTypes.TEXT,
  departure_date: DataTypes.TEXT,
});

export default Bookings2;