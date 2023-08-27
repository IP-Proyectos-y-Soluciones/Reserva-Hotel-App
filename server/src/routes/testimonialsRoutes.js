const express = require('express');
const router = express.Router();
const { getAllTestimonials, createTestimonial, updateTestimonial, deleteTestimonial } = require('../controllers/testimonialsControllers');


router.get('/', async (req, res) => {
  const testimonials = await getAllTestimonials();
  //res.json(testimonials);
  res.render('pages/testimonials.ejs', {testimonials, title: 'Hotel Backend'});
});


router.post('/', async (req, res) => {
  const { testimony, approved, id_us, id_room, id_res } = req.body;
  const newTestimonial = await createTestimonial(
    testimony,
    approved,
    id_us,
    id_room,
    id_res
  );
  res.json(newTestimonial);
});


router.put('/:id', async (req, res) => {
  const { id } = req.params;
  const { testimony, approved } = req.body;
  const result = await updateTestimonial(id, testimony, approved);
  res.json(result);
});


router.delete('/:id', async (req, res) => {
  const { id } = req.params;
  const result = await deleteTestimonial(id);
  res.json(result);
});

module.exports = router;
