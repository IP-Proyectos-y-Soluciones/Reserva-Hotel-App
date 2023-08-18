const express = require("express");
const router = express.Router();

const {createUser, updateUsers, login, getUsers} = require('../controllers/usersControllers')
const { sendMail } = require("../controllers/sendMailController")


router.post('/', async (req, res) => {
    
    try {
        const { password, email, name, photo, mode, check, encrypted_email } = req.body

        const newUser = await createUser(password, email, name, photo, mode, check, encrypted_email)
        if (newUser.error) {
            res.status(400).json({ error: newUser.error })
        } else {
            let subject = "NUEVO CUENTA"
            let text = `Su cuenta ha sido creada sin problemas! ¡Felicidades! por Name:${name}`
            sendMail(email, subject, text);
            res.status(201).json(newUser)
        }
    } catch (error) {
        res.status(500).json({ error: 'Internal server error' })
    }
})

router.put('/:id', async (req, res) => {
    try {

        const {id} = req.params
        const { name, password, email, photo, mode, check, encrypted_email} = req.body

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

router.post('/login', async (req, res) => {

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

router.get('/', async (req, res) => {
    try {
      const users = await getUsers();
      if (users.error) {
        res.status(400).json({ error: users.error });
      } 
      else{
      res.status(201).json(users);
      }
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  });


module.exports = router;