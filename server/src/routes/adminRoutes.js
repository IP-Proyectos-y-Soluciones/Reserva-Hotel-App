const express = require("express");
const router = express.Router();
const { createAdmin, getAdmins, updateAdmin, deleteAdmin, login } = require("../controllers/administratorasControllers") 

router.get('/create', (req, res) => {
  res.render('pages/admin/admin-create.ejs');
});

router.get('/update', async (req, res) => {
  try {
    res.render('pages/admin/admin-update.ejs');
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});


router.post('/', async (req, res) => {

    const { profile, name, password, user, status } = req.body;
  
    try {
      const newAdmin = await createAdmin(profile, name, user, password, status);

      if (newAdmin.error) {
        res.status(400).json({ error: newAdmin.error });
      } else {

        res.status(201).json(newAdmin);
      }
    } catch (error) {

      res.status(500).json({ error: 'Internal server error'});
    }
  });

  router.get('/get', async (req, res) => {
    try {
      const admins = await getAdmins();
      if (admins.error) {
        res.status(400).json({ error: newAdmin.error });
      } 
      else{
      res.render('pages/admin/admin-get.ejs', { admins })
      }
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  });
  
  router.put('/', async (req, res) => {
    try {
      const { profile, name, user, password, status, id } = req.body;
  
      const updatedAdmin = await updateAdmin(id, profile, name, user, password, status);
      res.json(updatedAdmin);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  });

  router.delete('/:id', async (req, res) => {
    try {
      const {id} = req.params;
  
      const result = await deleteAdmin(id);
      
      if (result.error) {
        res.status(404).json({ error: result.error });
      } else {
        res.status(200).json({ message: 'Admin silindi' });
      }
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  });

  router.post('/login', async (req, res) => {
    try {
      const { user, password } = req.body;
      const result = await login(user, password);
      res.status(201).json(result);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  });

module.exports = router;
