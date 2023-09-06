const express = require("express");
const router = express.Router();
const { createService, updateService, deleteService, getAllServices } = require('../controllers/serviceControllers')
const { verifyToken } = require('../middlewares/tokenAuthentication')

router.post('/', async (req, res) => {
    try {
        const { photo_small, big_photo, title, description } = req.body;
        const newService = await createService(photo_small, big_photo, title, description);

        if (newService.error) {
            res.render('pages/404.ejs', { newService, title: 'Hotel Backend' });
        } else {
            const services = await getAllServices();
            res.render('pages/service.ejs', { newService, services, title: 'Hotel Backend' });
        }
    } catch (error) {
        res.status(500).json({ error: 'Internal server error' });
    }
});

router.post('/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const { photo_small, big_photo, title, description } = req.body;

        const updatedService = await updateService(id, photo_small, big_photo, title, description);
        if (updatedService.error) {
            res.render('pages/404.ejs', { updatedService, title: 'Hotel Backend' });
        } else {
            const services = await getAllServices();
            res.render('pages/service.ejs', { updatedService, services, title: 'Hotel Backend' });
        }
    } catch (error) {
        res.status(500).json({ error: 'Internal server error' });
    }
});

router.post('/delete/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const deletedService = await deleteService(id);
        if (deletedService.error) {
            res.render('pages/404.ejs', { deletedService, title: 'Hotel Backend' });
        } else {
            const services = await getAllServices();
            res.render('pages/service.ejs', { deletedService, services, title: 'Hotel Backend' });
        }
    } catch (error) {
        res.status(500).json({ error: 'Internal server error' });
    }
});

router.get('/', async (req, res) => {
    try {
        const services = await getAllServices();
        if (services.error) {
            return res.status(400).json({ error: services.error });
        }

        const responseData = { services, title: 'Hotel Backend' };

        if (req.accepts('html')) {
            // Si el cliente acepta HTML, renderiza la vista
            res.render('pages/service.ejs', responseData);
        } else if (req.accepts('json')) {
            // Si el cliente acepta JSON, devuelve el JSON
            res.json(services);
        } else {
            // Si el cliente no acepta ni HTML ni JSON, devuelve un error
            res.status(406).send('Not Acceptable');
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

//Dashboard admin only
router.get('/api', verifyToken, async (req, res) => {
    try {
        const services = await getAllServices();
        if (services.error) {
            return res.status(400).json({ error: services.error });
        }

        const responseData = { services, title: 'Hotel Backend' };
        res.render('pages/service.ejs', responseData);

    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

module.exports = router;
