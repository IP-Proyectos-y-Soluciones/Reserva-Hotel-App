import { DataTypes } from "sequelize";
import sequelize from '../config/db';
import byrcpt from 'bcrypt';

const Administrator = sequelize.define('administrator', {
  id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    primaryKey: true,
    autoIncrement: true,
  },
  profile: DataTypes.TEXT,
  name: DataTypes.TEXT,
  user: DataTypes.TEXT,
  password: DataTypes.TEXT,
  status: DataTypes.INTEGER,
  date: {
    type: DataTypes.TIMESTAMP,
    defaultValue: DataTypes.NOW,
  },
});

export default  Administrator;
