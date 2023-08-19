const express = require("express");
const router = express.Router();

const {createTravel, updateTravel, deleteTravel, getAllTravels} = require('../controllers/travelControllers')

router.post('/', async (req, res) => {
    
    try {
        const { photo_small, big_photo, title, description } = req.body

        const newTravel = await createTravel(photo_small, big_photo, title, description)
        if (newTravel.error) {
            res.status(400).json({ error: newTravel.error })
        } else {
            res.status(201).json(newTravel)
        }
    } catch (error) {
        res.status(500).json({ error: 'Internal server error' })
    }
})

router.put('/:id', async (req, res) => {
    try {
        const {id} = req.params;
        const { photo_small, big_photo, title, description} = req.body

        const updatedTravel = await updateTravel(id, photo_small, big_photo, title, description)
        if (updatedTravel.error) {
            res.status(400).json({ error: updatedTravel.error })
        } else {
            res.status(201).json(updatedTravel)
        }
    } catch (error) {
        res.status(500).json({ error: 'Internal server error' })
    }
})

router.delete('/:id', async (req, res) => {
    try {
        const {id} = req.params

        const deletedTravel = await deleteTravel(id)
        if (deletedTravel.error) {
            res.status(400).json({ error: deletedTravel.error })
        } else {
            res.status(201).json(deletedTravel)
        }
    } catch (error) {
        res.status(500).json({ error: 'Internal server error' })
    }
})

router.get('/', async (req, res) => {

    try {

        const getTravels = await getAllTravels()
        if (getTravels.error) {
            res.status(400).json({ error: getTravels.error })
        } else {
            res.status(201).json(getTravels)
        }
    } catch (error) {
        res.status(500).json({ error: 'Internal server error' })
    }
})

module.exports = router;