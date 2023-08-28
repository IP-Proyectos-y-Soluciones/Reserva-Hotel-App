const express = require("express");
const router = express.Router();

const {createTravel, updateTravel, deleteTravel, getAllTravels} = require('../controllers/travelControllers')

router.post('/', async (req, res) => {
    
    try {
        const { photo_small, big_photo, title, description } = req.body

        const newTravel = await createTravel(photo_small, big_photo, title, description)
        if (newTravel.error) {
            res.render('pages/404.ejs', { newTravel, title: 'Hotel Backend' });
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
            res.render('pages/404.ejs', { updatedTravel, title: 'Hotel Backend' });
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
            res.render('pages/404.ejs', { deletedTravel, title: 'Hotel Backend' });
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
            //res.status(201).json(getTravels)
            res.render('pages/404.ejs', { getTravels, title: 'Hotel Backend' });
        }
    } catch (error) {
        res.status(500).json({ error: 'Internal server error' })
    }
})

module.exports = router;