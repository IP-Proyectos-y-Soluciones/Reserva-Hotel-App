import { DataTypes } from 'sequelize';
import sequelize from '../config/db';

const Bookings2 = sequelize.define('bookings2', {
  id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    primaryKey: true,
    allowNull: false,
  },
  id_room: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  admission_date: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  departure_date: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
});

export default Bookings2;
