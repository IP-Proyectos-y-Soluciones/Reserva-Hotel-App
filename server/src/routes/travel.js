const express = require("express");
const router = express.Router();
const { createTravel, updateTravel, deleteTravel, getAllTravels } = require('../controllers/travelControllers')

router.post('/', async (req, res) => {
    try {
        const { photo_small, big_photo, title, description } = req.body;
        const newTravel = await createTravel(photo_small, big_photo, title, description);

        if (newTravel.error) {
            res.render('pages/404.ejs', { newTravel, title: 'Hotel Backend' });
        } else {
            const travels = await getAllTravels();
            res.render('pages/travel.ejs', { newTravel, travels, title: 'Hotel Backend' });
        }
    } catch (error) {
        res.status(500).json({ error: 'Internal server error' });
    }
});

router.post('/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const { photo_small, big_photo, title, description } = req.body;

        const updatedTravel = await updateTravel(id, photo_small, big_photo, title, description);
        if (updatedTravel.error) {
            res.render('pages/404.ejs', { updatedTravel, title: 'Hotel Backend' });
        } else {
            const travels = await getAllTravels();
            res.render('pages/travel.ejs', { updatedTravel, travels, title: 'Hotel Backend' });
        }
    } catch (error) {
        res.status(500).json({ error: 'Internal server error' });
    }
});

router.post('/delete/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const deletedTravel = await deleteTravel(id);
        if (deletedTravel.error) {
            res.render('pages/404.ejs', { deletedTravel, title: 'Hotel Backend' });
        } else {
            const travels = await getAllTravels();
            res.render('pages/travel.ejs', { deletedTravel, travels, title: 'Hotel Backend' });
        }
    } catch (error) {
        res.status(500).json({ error: 'Internal server error' });
    }
});

router.get('/', async (req, res) => {
    try {
        const travels = await getAllTravels();
        if (travels.error) {
            return res.status(400).json({ error: travels.error });
        }

        const responseData = { travels, title: 'Hotel Backend' };

        if (req.accepts('html')) {
            // Si el cliente acepta HTML, renderiza la vista
            res.render('pages/travel.ejs', responseData);
        } else if (req.accepts('json')) {
            // Si el cliente acepta JSON, devuelve el JSON
            res.json(travels);
        } else {
            // Si el cliente no acepta ni HTML ni JSON, devuelve un error
            res.status(406).send('Not Acceptable');
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

module.exports = router;
