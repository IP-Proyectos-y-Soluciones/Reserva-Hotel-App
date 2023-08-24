const express = require("express");
const router = express.Router();
const crypto = require('crypto');

const {createUser, updateUsers, login, getUsers} = require('../controllers/usersControllers')
const { sendMail } = require("../controllers/sendMailController")

const verificationCodes = {};

function generateVerificationCode() {
    return crypto.randomBytes(3).toString('hex');
}

router.post('/', async (req, res) => {
    try {
        const { password, email, name, photo, mode, check, encrypted_email } = req.body;

        const newUser = await createUser(password, email, name, photo, mode, check, encrypted_email);
        if (newUser.error) {
            res.status(400).json({ error: newUser.error });
        } else {

            const verificationCode = generateVerificationCode();
            
            verificationCodes[email] = verificationCode;

            let subject = "NUEVO CUENTA";
            let text = `Su cuenta ha sido creada sin problemas! ¡Felicidades! por Name:${name} verifica tu código: ${verificationCode} `;
            sendMail(email, subject, text);
            res.status(201).json(newUser);
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal server error' });
    }
});

router.post('/verify', async (req, res) => {

    const { email, verificationCode } = req.body;

    if (verificationCodes[email] === verificationCode) {
        res.status(200).json({ message: 'Usuario verificado.' });
    } else {
        res.status(400).json({ error: 'Código de verificación incorrecto.' });
    }
});

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
      //res.status(201).json(users);
      res.render('pages/users.ejs', {users, title: 'Hotel Backend'});
      }
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  });


module.exports = router;