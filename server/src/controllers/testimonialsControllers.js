const { Testimonials, Users, Bedrooms, Bookings } = require('../config/db');

const getAllTestimonials = async () => {
  try {
    const testimonials = await Testimonials.findAll({
      include: [
        {
          model: Users,
          attributes: ['name', 'date']
        },
        {
          model: Bedrooms,
          attributes: ['kind_h']
        },
        {
          model: Bookings,
          attributes: ['transaction_number']
        }
      ]
    });

    return testimonials;
  } catch (error) {

    return { error: error.message };
  }
};

// Crear un nuevo testimonio
const createTestimonial = async (testimony, approved, id_us, id_room, id_res) => {
  try {

    const newTestimonial = await Testimonials.create({
      testimony,
      approved,
      //id_us,
      //id_room
    });
    await newTestimonial.setUser(id_us)
    await newTestimonial.setBedroom(id_room)
    await newTestimonial.setBooking(id_res)
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
