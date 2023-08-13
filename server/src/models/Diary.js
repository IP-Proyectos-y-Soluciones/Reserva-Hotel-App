import { DataTypes } from 'sequelize';
import sequelize from '../config/db'; // Asegúrate de ajustar la ruta

const Diary = sequelize.define('diary', {
  // Define los atributos del modelo
  // ...
});

export default Diary;
