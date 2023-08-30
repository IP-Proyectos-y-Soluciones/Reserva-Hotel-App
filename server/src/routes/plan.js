const express = require("express");
const router = express.Router();
const { createPlan, updatePlan, deletePlan, getAllPlans } = require('../controllers/planControllers');

router.post('/', async (req, res) => {
  try {
    const { kind, img, description, hight_price, low_price } = req.body;
    const newPlan = await createPlan(kind, img, description, hight_price, low_price);

    if (newPlan.error) {
      console.error(newPlan.error); 
    } else {
      const plans = await getAllPlans();
      res.render('pages/plans.ejs', { plans, newPlan, title: 'Hotel Backend' });
    }
  } catch (error) {
    console.error(error);
  }
});

router.post('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const { kind, img, description, high_price, low_price } = req.body;

    const updatedPlan = await updatePlan(id, kind, img, description, high_price, low_price);

    if (updatedPlan.error) {
      console.error(updatedPlan.error);
    } else {
      const plans = await getAllPlans();
      res.render('pages/plans.ejs', { plans, updatedPlan, title: 'Hotel Backend' });
    }
  } catch (error) {
    console.error(error);
  }
});

router.post('/delete/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const deletedPlan = await deletePlan(id);

    if (deletedPlan.error) {
      console.error(deletedPlan.error);
    } else {
      const plans = await getAllPlans();
      res.render('pages/plans.ejs', { plans, deletedPlan, title: 'Hotel Backend' });
    }
  } catch (error) {
    console.error(error);
  }
});



// router.get('/', async (req, res) => {
//   try {
//     const plans = await getAllPlans();
//     res.render('pages/plans.ejs', { plans, title: 'Hotel Backend' });
//   } catch (error) {
//     res.status(500).json({ error: error.message });
//   }
// });

router.get('/', async (req, res) => {
  try {
      const plans = await getAllPlans();
      if (plans.error) {
          return res.status(400).json({ error: plans.error });
      }

      const responseData = { plans, title: 'Hotel Backend' };

      if (req.accepts('html')) {
          // Si el cliente acepta HTML, renderiza la vista
          res.render('pages/plans.ejs', responseData);
      } else if (req.accepts('json')) {
          // Si el cliente acepta JSON, devuelve el JSON
          res.json(plans);
      } else {
          // Si el cliente no acepta ni HTML ni JSON, devuelve un error
          res.status(406).send('Not Acceptable');
      }
  } catch (error) {
      res.status(500).json({ error: error.message });
  }
});

module.exports = router;
