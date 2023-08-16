import { DataTypes } from "sequelize";
import sequelize from '../config/db';
byrcpt

const Administrator = sequelize.define('administrator', {
  id: {
    type: DataTypes.INTEGER,
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
