const express = require("express");
const router = express.Router();

const { createTravel, updateTravel, deleteTravel, getAllTravels } = require('../controllers/travelControllers')

router.post('/', async (req, res) => {

    try {
        const { photo_small, big_photo, title, description } = req.body

        const newTravel = await createTravel(photo_small, big_photo, title, description)
        if (newTravel.error) {
            res.status(400).json({ error: newTravel.error })
        } else {
            //res.status(201).json(newTravel)
            const travels = await getAllTravels()
            res.render('pages/travel.ejs', { newTravel, travels, title: 'Hotel Backend' })
        }
    } catch (error) {
        res.status(500).json({ error: 'Internal server error' })
    }
})

//Tenia una ruta put pero investigando, es necesario libreria 'method-override' para dejarlo con dicho put
//ACTUALIZAR
router.post('/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const { photo_small, big_photo, title, description } = req.body

        const updatedTravel = await updateTravel(id, photo_small, big_photo, title, description)
        if (updatedTravel.error) {
            res.status(400).json({ error: updatedTravel.error })
        } else {
            //res.status(201).json(updatedTravel)
            const travels = await getAllTravels()
            res.render('pages/travel.ejs', {updatedTravel, travels, title: 'Hotel Backend'})
        }
    } catch (error) {
        res.status(500).json({ error: 'Internal server error' })
    }
})

//router.delete('/:id', async (req, res) => {
//ELIMINAR
router.post('/delete/:id', async (req, res) => {
    try {
        const { id } = req.params

        const deletedTravel = await deleteTravel(id)
        if (deletedTravel.error) {
            res.status(400).json({ error: deletedTravel.error })
        } else {
            const travels = await getAllTravels()
            //res.status(201).json(deletedTravel)
            res.render('pages/travel.ejs', {deletedTravel, travels, title: 'Hotel Backend'})
            //res.redirect('/travel')
        }
    } catch (error) {
        res.status(500).json({ error: 'Internal server error' })
    }
})

router.get('/', async (req, res) => {

    try {

        const travels = await getAllTravels()
        if (travels.error) {
            res.status(400).json({ error: travels.error })
        } else {
            //res.status(201).json(getTravels)
            res.render('pages/travel.ejs', { travels, title: 'Hotel Backend' });
        }
    } catch (error) {
        res.status(500).json({ error: 'Internal server error' })
    }
})

module.exports = router;