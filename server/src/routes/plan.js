const express = require("express");
const router = express.Router();
const { createPlan, updatePlan, deletePlan, getAllPlans } = require('../controllers/planControllers')




router.post('/', async (req, res) => {
  try {
    const { kind, img, description, hight_price, low_price } = req.body;
    const newPlan = await createPlan(kind, img, description, hight_price, low_price);

    if (newPlan.error) {
      console.error(newPlan)
    } else {
      const plans = await getAllPlans();
      res.render('pages/plans.ejs', { plans, newPlan, title: 'Hotel Backend' });
    }
  } catch (error) {
    console.error(error)
  }
});

router.post('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const { kind, img, description, hight_price, low_price } = req.body;

    const updatedPlan = await updatePlan(id, kind, img, description, hight_price, low_price);

    if (updatedPlan.error) {
      console.error(updatedPlan)
    } else {
      const plans = await getAllPlans();
      res.render('pages/plans.ejs', { plans, updatedPlan, title: 'Hotel Backend' });
    }
  } catch (error) {
    console.error(error)
  }
});

router.post('/delete/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const deletedPlan = await deletePlan(id);

    if (deletedPlan.error) {
      console.error(deletedPlan)
    } else {
      const plans = await getAllPlans();
      res.render('pages/plans.ejs', { plans, deletedPlan, title: 'Hotel Backend' });
    }
  } catch (error) {
    console.error(error)
  }
});

router.get('/', async (req, res) => {
  try {
    const plans = await getAllPlans();

    if (plans.error) {
    console.error(plans.error)
    } else {
      res.render('pages/plans.ejs', { plans, title: 'Hotel Backend' });
    }
  } catch (error) {
    console.error(error)
  }
});

module.exports = router;
