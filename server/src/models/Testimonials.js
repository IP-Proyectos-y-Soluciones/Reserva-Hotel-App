import { DataTypes } from 'sequelize';
import sequelize from '../config/db'; // Asegúrate de ajustar la ruta

const Testimonials = sequelize.define('testimonials', {
  // Define los atributos del modelo
  // ...
});

export default Testimonials;