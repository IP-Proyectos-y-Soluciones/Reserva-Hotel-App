const express = require("express");
const router = express.Router();
const crypto = require('crypto');
const { Users } = require('../config/db')
const {createUser, updateUsers, login, getUsers} = require('../controllers/usersControllers')
const { sendMail } = require("../controllers/sendMailController")


function generateVerificationCode() {
    return crypto.randomBytes(3).toString('hex');
}

router.post('/', async (req, res) => {
    try {
      const { password, email, name, photo, mode, check, encrypted_email } = req.body;
  
      const newUser = await createUser(password, email, name, photo, mode, check, encrypted_email);
      if (newUser.error) {
        res.render('pages/404.ejs', { newUser, title: 'Hotel Backend' });

      } else {

<<<<<<< HEAD


            const verificationCode = generateVerificationCode();
            
            verificationCodes[email] = verificationCode;

            let subject = "NUEVA CUENTA";
            let text = `Su cuenta ha sido creada sin problemas! ¡Felicidades! por Name:${name} verifica tu código: ${verificationCode} `;


            sendMail(email, subject, text);
            res.status(201).json(newUser);
        }
=======
        const verificationCode = generateVerificationCode();
        
  
        newUser.verificationCode = verificationCode;
        await newUser.save();
  
        let subject = "NUEVO CUENTA";
        let text = `Su cuenta ha sido creada sin problemas! ¡Felicidades! por Name:${name} verifica tu código: ${verificationCode} `;
  
        sendMail(email, subject, text);
        res.status(201).json(newUser);
      }
>>>>>>> d50c09494bc4d33ee72425ce9d5c4c9269e7d007
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal server error' });
    }
  });

  router.post('/verify', async (req, res) => {
    const { email, verificationCode } = req.body;
  
    try {
      const user = await Users.findOne({ where: { email } });
  
      if (user && user.verificationCode === verificationCode) {
        res.render('pages/404.ejs', { user, title: 'Hotel Backend' });
      } else {
        res.status(400).json({ error: 'Código de verificación incorrecto.' });
      }
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal server error' });
    }
  });

router.put('/:id', async (req, res) => {
    try {

        const {id} = req.params
        const { name, password, email, photo, mode, check, encrypted_email} = req.body

        const updatedUser = await updateUsers(id, name, password, email, photo, mode, check, encrypted_email)
        if (updatedUser.error) {
            res.render('pages/404.ejs', { updatedUser, title: 'Hotel Backend' });
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
            res.render('pages/404.ejs', { getUser, title: 'Hotel Backend' });
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
        res.render('pages/404.ejs', { users, title: 'Hotel Backend' });
      } 
      else{
  
      res.render('pages/users.ejs', {users, title: 'Hotel Backend'});
      }
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  });


module.exports = router;