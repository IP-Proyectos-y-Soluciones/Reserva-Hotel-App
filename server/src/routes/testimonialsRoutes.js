const express = require('express');
const router = express.Router();
const { Testimonials } = require('../config/db')
const { getAllTestimonials, createTestimonial, updateTestimonial, deleteTestimonial } = require('../controllers/testimonialsControllers');
const { verifyToken } = require('../middlewares/tokenAuthentication')

router.get('/', async (req, res) => {
  try {
      const testimonials = await getAllTestimonials();
      if (testimonials.error) {
          return res.status(400).json({ error: testimonials.error });
      }

      const responseData = { testimonials, title: 'Hotel Backend' };

      if (req.accepts('html')) {
          // Si el cliente acepta HTML, renderiza la vista
          res.render('pages/testimonials.ejs', responseData);
      } else if (req.accepts('json')) {
          // Si el cliente acepta JSON, devuelve el JSON
          res.json(testimonials);
      } else {
          // Si el cliente no acepta ni HTML ni JSON, devuelve un error
          res.status(406).send('Not Acceptable');
      }
  } catch (error) {
      res.status(500).json({ error: error.message });
  }
});

//Dashboard admin only
router.get('/api', verifyToken, async (req, res) => {
  try {
      const testimonials = await getAllTestimonials();
      if (testimonials.error) {
          return res.status(400).json({ error: testimonials.error });
      }

      const responseData = { testimonials, title: 'Hotel Backend' };
      res.render('pages/testimonials.ejs', responseData);

  } catch (error) {
      res.status(500).json({ error: error.message });
  }
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

//Aprobacion de testimonios
router.post('/api/approve/:id_testimony', async (req, res) => {
  try {
    const {id_testimony} = req.params

    const record = await Testimonials.findByPk(id_testimony)

    if(!record){
      return res.status(404).send('Registro no encontrado')
    }

    const newTestimonialApproved = !record.approved;


    await Testimonials.update({approved: newTestimonialApproved}, {where: {id_testimony}})

    res.redirect('/testimonials/api')
  } catch (error) {
    res.status(500).json({ error: error.message, message: 'Aqui cae el error' });
  }
})

module.exports = router;
