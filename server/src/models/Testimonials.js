import { DataTypes } from 'sequelize';
import sequelize from '../config/db'; // Asegúrate de ajustar la ruta

const Testimonials = sequelize.define('testimonials', {
  // Define los atributos del modelo
  // ...
  id_testimony: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    primaryKey: true,
    autoIncrement: true,
  },
  id_res: DataTypes.TEXT,
  is_us: DataTypes.TEXT,
  is_room: DataTypes.TEXT,
  testimony: DataTypes.TEXT,
  approved: DataTypes.TEXT,
  date: {
    type: DataTypes.TIMESTAMP,
    defaultValue: DataTypes.NOW,
  },
});

export default Testimonials;