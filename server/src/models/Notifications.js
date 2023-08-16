import { DataTypes } from 'sequelize';
import sequelize from '../config/db';

const Notifications = sequelize.define('notifications', {
  id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    primaryKey: true,
    allowNull: false,
  },
  kind: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  amount: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  date: {
    type: DataTypes.TIMESTAMP,
    defaultValue: DataTypes.NOW,
    allowNull: false,
  },
});

export default Notifications;
