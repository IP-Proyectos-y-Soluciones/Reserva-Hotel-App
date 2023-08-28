const express = require("express");
const router = express.Router();
const { createPlan, updatePlan, deletePlan, getAllPlans } = require('../controllers/planControllers');

router.post('/', async (req, res) => {
  try {
    const { kind, img, description, high_price, low_price } = req.body;
    const newPlan = await createPlan(kind, img, description, high_price, low_price);

    if (newPlan.error) {
      console.error(newPlan.error); // Değişiklik: newPlan.error olarak düzeltildi
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
      console.error(updatedPlan.error); // Değişiklik: updatedPlan.error olarak düzeltildi
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
      console.error(deletedPlan.error); // Değişiklik: deletedPlan.error olarak düzeltildi
    } else {
      const plans = await getAllPlans();
      res.render('pages/plans.ejs', { plans, deletedPlan, title: 'Hotel Backend' });
    }
  } catch (error) {
    console.error(error);
  }
});

router.get('/', async (req, res) => {
  try {
    const plans = await getAllPlans();
    if (plans.error) {
      console.error(plans.error);
    } else {
      res.render('pages/plans.ejs', { plans, title: 'Hotel Backend' });
    }
<<<<<<< HEAD
=======

>>>>>>> 65c5c252aa1cd51acf36369118822e921bd4be08
    try {
      const getPlans = await getAllPlans();
      if (getPlans.error) {
        res.status(400).json({ error: getPlans.error });
      } else {
        res.status(201).json(getPlans);
        res.render('pages/plans.ejs', { getPlans, title: 'Hotel Backend' });
      }
    } catch (error) {
      res.status(500).json({ error: 'Internal server error' });
    }
  } catch (error) {
    console.error(error);
  }
});

module.exports = router;
