const express = require("express");
const router = express.Router();
const { createNotification, getAllNotifications, updateNotification, deleteNotification } = require('../controllers/notificationsControllers')

router.post('/', async (req, res) => {
    
    try {
        const { kind, amount } = req.body

        const newNotification = await createNotification(kind, amount)
        if (newNotification.error) {
            res.render('pages/404.ejs', { newNotification, title: 'Hotel Backend' });
        } else {
            res.status(201).json(newNotification)
        }
    } catch (error) {
        res.status(500).json({ error: 'Internal server error' })
    }
})

router.put('/:id', async (req, res) => {
    try {
        const { id } = req.params
        const { kind, amount} = req.body

        const updatedNotification = await updateNotification(id, kind, amount)
        if (updatedNotification.error) {
            res.render('pages/404.ejs', { updatedNotification, title: 'Hotel Backend' });
        } else {
            res.status(201).json(updatedNotification)
        }
    } catch (error) {
        res.status(500).json({ error: 'Internal server error' })
    }
})

router.delete('/:id', async (req, res) => {
    try {
        const {id} = req.params

        const deletedNotification = await deleteNotification(id)
        if (deletedNotification.error) {
            res.render('pages/404.ejs', { deletedNotification, title: 'Hotel Backend' });
        } else {
            res.status(201).json(deletedNotification)
        }
    } catch (error) {
        res.status(500).json({ error: 'Internal server error' })
    }
})

router.get('/', async (req, res) => {

    try {

        const getNotifications = await getAllNotifications()
        if (getNotifications.error) {
            res.render('pages/404.ejs', { getNotifications, title: 'Hotel Backend' });
        } else {
            res.status(201).json(getNotifications)
        }
    } catch (error) {
        res.status(500).json({ error: 'Internal server error' })
    }
})

module.exports = router;