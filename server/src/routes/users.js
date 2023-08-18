const express = require("express");
const router = express.Router();

const {createUser, updateUsers, login} = require('../controllers/usersControllers')

router.post('/', async (req, res) => {
    
    try {
        const { password, email, name, photo, mode, check, encrypted_email } = req.body

        const newUser = await createUser(password, email, name, photo, mode, check, encrypted_email)
        if (newUser.error) {
            res.status(400).json({ error: newUser.error })
        } else {
            res.status(201).json(newUser)
        }
    } catch (error) {
        res.status(500).json({ error: 'Internal server error' })
    }
})

router.put('/', async (req, res) => {
    try {
        const {id, name, password, email, photo, mode, check, encrypted_email} = req.body

        const updatedUser = await updateUsers(id, name, password, email, photo, mode, check, encrypted_email)
        if (updatedUser.error) {
            res.status(400).json({ error: updatedUser.error })
        } else {
            res.status(201).json(updatedUser)
        }
    } catch (error) {
        res.status(500).json({ error: 'Internal server error' })
    }
})

router.get('/', async (req, res) => {

    try {

        const {email, password} = req.body

        const getUser = await login(email, password)
        if (getUser.error) {
            res.status(400).json({ error: getUser.error })
        } else {
            res.status(201).json(getUser)
        }
    } catch (error) {
        res.status(500).json({ error: 'Internal server error' })
    }
})

module.exports = router;