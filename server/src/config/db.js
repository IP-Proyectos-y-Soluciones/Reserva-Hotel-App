import 'dotenv/config';
import { Sequelize } from 'sequelize';
import fs from 'fs';
import path from 'path';

const {
  DB_USER, DB_PASSWORD, DB_HOST, DB_PORT, DATABASE
} = process.env;

const sequelize = new Sequelize(`postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}:${DB_PORT}/${DATABASE}`, {
  logging: false,
  native: false,
});

const __filename = fileURLToPath( import.meta.url );
const __dirname = path.dirname(__filename);

const modelDefiners = [];

fs.readdirSync(path.join(__dirname, 'models'))
  .filter((file) => (file.indexOf('.') !== 0) && (file.slice(-3) === '.js'))
  .forEach(async (file)  =>  {
    const model = await import(path.join(__dirname, 'models', file));
    modelDefiners.push(model.default);
  });

modelDefiners.forEach((modelDefiner) => modelDefiner(sequelize));

const entries = Object.entries(sequelize.models);
const capsEntries = entries.map((entry) => [entry[0][0].toUpperCase() + entry[0].slice(1), entry[1]]);
sequelize.models = Object.fromEntries(capsEntries);

const { Diary, Bookings, Testimonials, Bedrooms, Users } = sequelize.models;

Diary.belongsTo(Bedrooms, { foreignKey: 'id_room' });
Bookings.belongsTo(Users, { foreignKey: 'id_user' });
Bookings.belongsTo(Bedrooms, { foreignKey: 'id_room' });
Testimonials.belongsTo(Users, { foreignKey: 'id_res' });
Testimonials.belongsTo(Users, { foreignKey: 'id_us' });
Testimonials.belongsTo(Bedrooms, { foreignKey: 'id_room' });

module.exports = {
  ...sequelize.models, 
  conn: sequelize,
};