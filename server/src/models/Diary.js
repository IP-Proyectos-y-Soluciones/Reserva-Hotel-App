import { DataTypes } from 'sequelize';
import sequelize from '../config/db'; // Asegúrate de ajustar la ruta

const Diary = sequelize.define('diary', {
  // Define los atributos del modelo
  // ...
  id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    primaryKey: true,
    autoIncrement: true,
  },
  id_room: DataTypes.TEXT,
  admission_date: DataTypes.TEXT,
  departure_date: DataTypes.TEXT,
});

export default Diary;
