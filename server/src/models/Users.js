import { DataTypes } from "sequelize";
import sequelize from "../config/db"; // Asegúrate de ajustar la ruta

const Users = sequelize.define("users", {
  // Define los atributos del modelo
  // ...
  id_u: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  name: DataTypes.TEXT,
  password: DataTypes.TEXT,
  email: DataTypes.TEXT,
  photo: DataTypes.TEXT,
  mode: DataTypes.TEXT,
  check: DataTypes.TEXT,
  encrypted_email: DataTypes.TEXT,
  date: {
    type: DataTypes.TIMESTAMP,
    defaultValue: DataTypes.NOW,
  },
});

export default Users;
