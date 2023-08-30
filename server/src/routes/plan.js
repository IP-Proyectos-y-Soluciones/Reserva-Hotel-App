const express = require('express');
const router = express.Router();
const { createPlan, updatePlan, deletePlan, getAllPlans } = require('../controllers/planControllers');

router.post('/', async (req, res) => {
  try {
    const { kind, img, description, high_price, low_price } = req.body;
    const newPlan = await createPlan(kind, img, description, high_price, low_price);

    if (req.accepts('json')) {
      res.status(201).json({ newPlan });
    } else if (req.accepts('html')) {
      if (newPlan.error) {
        console.error(newPlan.error);
      } else {
        const plans = await getAllPlans();
        res.render('pages/plans.ejs', { plans, newPlan, title: 'Hotel Backend' });
      }
    }

  } catch (error) {
    console.error(error);
    if (req.accepts('json')) {
      res.status(500).json({ error: error.message });
    } else if (req.accepts('html')) {
      res.status(500).json({ error: error.message });
    }
  }
});

router.post('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const { kind, img, description, high_price, low_price } = req.body;

    const updatedPlan = await updatePlan(id, kind, img, description, high_price, low_price);

    if (req.accepts('json')) {
      res.status(201).json({ updatedPlan });
    } else if (req.accepts('html')) {
      if (updatedPlan.error) {
        console.error(updatedPlan.error);
      } else {
        const plans = await getAllPlans();
        res.render('pages/plans.ejs', { plans, updatedPlan, title: 'Hotel Backend' });
      }
    }

  } catch (error) {
    console.error(error);
    if (req.accepts('json')) {
      res.status(500).json({ error: error.message });
    } else if (req.accepts('html')) {
      res.status(500).json({ error: error.message });
    }
  }
});

router.post('/delete/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const deletedPlan = await deletePlan(id);

    if (req.accepts('json')) {
      res.status(200).json({ deletedPlan });
    } else if (req.accepts('html')) {
      if (deletedPlan.error) {
        console.error(deletedPlan.error);
      } else {
        const plans = await getAllPlans();
        res.render('pages/plans.ejs', { plans, deletedPlan, title: 'Hotel Backend' });
      }
    }

  } catch (error) {
    console.error(error);
    if (req.accepts('json')) {
      res.status(500).json({ error: error.message });
    } else if (req.accepts('html')) {
      res.status(500).json({ error: error.message });
    }
  }
});

router.get('/', async (req, res) => {
  try {
    const plans = await getAllPlans();

    if (req.accepts('json')) {
      res.status(200).json(plans);
    } else if (req.accepts('html')) {
      res.render('pages/plans.ejs', { plans, title: 'Hotel Backend' });
    }

  } catch (error) {
    console.error(error);
    if (req.accepts('json')) {
      res.status(500).json({ error: error.message });
    } else if (req.accepts('html')) {
      res.status(500).json({ error: error.message });
    }
  }
});

module.exports = router;
