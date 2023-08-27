const { Testimonials, Users, Bedrooms } = require('../config/db');

const getAllTestimonials = async () => {
  try {
    const testimonials = await Testimonials.findAll({
        include: [
          { model: Users, as: 'users', foreignKey: 'id_us' },
          { model: Bedrooms, as: 'bedrooms', foreignKey: 'id_room' }
        ]
      });
      
    return testimonials;
  } catch (error) {

    return { error: error.message };
  }
};

// Crear un nuevo testimonio
const createTestimonial = async (testimony, approved, id_us, id_room) => {
  try {

    const newTestimonial = await Testimonials.create({
      testimony,
      approved,
      id_us,
      id_room
    });
    return newTestimonial;
  } catch (error) {
    return { error: error.message };
  }
};

const updateTestimonial = async (id, testimony, approved) => {
    try {
      await Testimonials.update(
        { testimony, approved },
        { where: { id } }
      );
      return { message: 'Testimonial updated successfully' };
    } catch (error) {
      return { error: error.message };
    }
  };
  
  const deleteTestimonial = async (id) => {
    try {
      await Testimonials.destroy({ where: { id } });
      return { message: 'Testimonial deleted successfully' };
    } catch (error) {
      return { error: error.message };
    }
  };
  
  module.exports = {
    getAllTestimonials,
    createTestimonial,
    updateTestimonial,
    deleteTestimonial
  };
  