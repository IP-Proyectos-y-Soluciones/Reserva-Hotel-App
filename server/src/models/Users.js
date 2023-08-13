import { DataTypes } from 'sequelize';
import sequelize from '../config/db'; // Asegúrate de ajustar la ruta

const Users = sequelize.define('users', {
  // Define los atributos del modelo
  // ...
});

export default Users;