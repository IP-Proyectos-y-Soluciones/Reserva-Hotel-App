import { DataTypes } from 'sequelize';
import sequelize from '../config/db'; // Asegúrate de ajustar la ruta

const Bookings = sequelize.define('bookings', {
  // Define los atributos del modelo
  // ...
  id_reservation: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    primaryKey: true,
    autoIncrement: true,
  },
  id_room: DataTypes.TEXT,
  id_user: DataTypes.TEXT,
  payment_reservation: DataTypes.TEXT,
  transaction_number: DataTypes.TEXT,
  reservation_code: DataTypes.TEXT,
  reservation_description: DataTypes.TEXT,
  admission_date: DataTypes.TEXT,
  departure_date: DataTypes.TEXT,
  reservation_date: DataTypes.TEXT,
});

export default Bookings;