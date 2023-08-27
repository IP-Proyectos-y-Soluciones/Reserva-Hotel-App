const express = require("express");
const router = express.Router();
const { createPlan, updatePlan, deletePlan, getAllPlans } = require('../controllers/planControllers')

router.post('/', async (req, res) => {

    try {
        const { kind, img, description, hight_price, low_price } = req.body

        const newPlan = await createPlan(kind, img, description, hight_price, low_price)
        if (newPlan.error) {
            res.status(400).json({ error: newPlan.error })
        } else {
            res.status(201).json(newPlan)
        }
    } catch (error) {
        res.status(500).json({ error: 'Internal server error' })
    }
})

router.put('/:id', async (req, res) => {
    try {
        const {id} = req.params;
        const { kind, img, description, hight_price, low_price } = req.body

        const updatedPlan = await updatePlan(id, kind, img, description, hight_price, low_price)
        if (updatedPlan.error) {
            res.status(400).json({ error: updatedPlan.error })
        } else {
            res.status(201).json(updatedPlan)
        }
    } catch (error) {
        res.status(500).json({ error: 'Internal server error' })
    }
})

router.delete('/:id', async (req, res) => {
    try {
        const { id } = req.params

        const deletedPlan = await deletePlan(id)
        if (deletedPlan.error) {
            res.status(400).json({ error: deletedPlan.error })
        } else {
            res.status(201).json(deletedPlan)
        }
    } catch (error) {
        res.status(500).json({ error: 'Internal server error' })
    }
})

router.get('/', async (req, res) => {

    try {

        const getPlans = await getAllPlans()
        if (getPlans.error) {
            res.status(400).json({ error: getPlans.error })
        } else {
            res.status(201).json(getPlans)
            res.render('pages/plans.ejs', {getPlans, title: 'Hotel Backend'});
        }
    } catch (error) {
        res.status(500).json({ error: 'Internal server error' })
    }
})

module.exports = router;