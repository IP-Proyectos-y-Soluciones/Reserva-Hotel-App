const express = require("express");
const router = express.Router();

const {createRestaurant, updateRestaurant, deleteRestaurant, getAllRestaurants} = require('../controllers/restaurantControllers')

router.post('/', async (req, res) => {
    
    try {
        const { img, description } = req.body

        const newRestaurant = await createRestaurant(img, description)
        if (newRestaurant.error) {
            res.status(400).json({ error: newRestaurant.error })
        } else {
            res.status(201).json(newRestaurant)
        }
    } catch (error) {
        res.status(500).json({ error: 'Internal server error' })
    }
})

router.put('/', async (req, res) => {
    try {
        const {id, img, description} = req.body

        const updatedRestaurant = await updateRestaurant(id, img, description)
        if (updatedRestaurant.error) {
            res.status(400).json({ error: updatedRestaurant.error })
        } else {
            res.status(201).json(updatedRestaurant)
        }
    } catch (error) {
        res.status(500).json({ error: 'Internal server error' })
    }
})

router.delete('/:id', async (req, res) => {
    try {
        const {id} = req.params

        const deletedRestaurant = await deleteRestaurant(id)
        if (deletedRestaurant.error) {
            res.status(400).json({ error: deletedRestaurant.error })
        } else {
            res.status(201).json(deletedRestaurant)
        }
    } catch (error) {
        res.status(500).json({ error: 'Internal server error' })
    }
})

router.get('/', async (req, res) => {

    try {

        const getRestaurants = await getAllRestaurants()
        if (getRestaurants.error) {
            res.status(400).json({ error: getRestaurants.error })
        } else {
            res.status(201).json(getRestaurants)
        }
    } catch (error) {
        res.status(500).json({ error: 'Internal server error' })
    }
})

module.exports = router;