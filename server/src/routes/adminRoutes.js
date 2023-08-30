const express = require("express");
const router = express.Router();
const { createAdmin, getAdmins, updateAdmin, deleteAdmin, login, getAdminById } = require("../controllers/administratorasControllers");

router.post('/', async (req, res) => {
  const { profile, name, password, user, status } = req.body;

  try {
    const newAdmin = await createAdmin(profile, name, user, password, status);

    if (newAdmin.error) {
      res.render('pages/404.ejs', { newAdmin, title: 'Hotel Backend' });
    } else {
      const admins = await getAdmins();
      res.render('pages/administrators.ejs', {  newAdmin, admins, title: 'Hotel Backend' });

      //res.status(201).json(newAdmin)
    }
  } catch (error) {
    res.status(500).json({ error: 'Internal server error'});
  }
});

// router.get('/', async (req, res) => {
//   try {
//     const admins = await getAdmins();
//     res.render('pages/administrators.ejs', { admins, title: 'Hotel Backend' });
//   } catch (error) {
//     res.status(500).json({ error: error.message });
//   }
// });

router.get('/', async (req, res) => {
  try {
      const admins = await getAdmins();
      if (admins.error) {
          return res.status(400).json({ error: admins.error });
      }

      const responseData = { admins, title: 'Hotel Backend' };

      if (req.accepts('html')) {
          // Si el cliente acepta HTML, renderiza la vista
          res.render('pages/administrators.ejs', responseData);
      } else if (req.accepts('json')) {
          // Si el cliente acepta JSON, devuelve el JSON
          res.json(admins);
      } else {
          // Si el cliente no acepta ni HTML ni JSON, devuelve un error
          res.status(406).send('Not Acceptable');
      }
  } catch (error) {
      res.status(500).json({ error: error.message });
  }
});

// Admin Güncelleme İşlemi
router.post('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const { profile, name, user, password, status } = req.body;

    const updatedAdmin = await updateAdmin(id, profile, name, user, password, status);

      
    const admins = await getAdmins();

    res.render('pages/administrators.ejs', { updatedAdmin, admins, title: 'Hotel Backend' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});


// Admin Silme İşlemi
router.post('/delete/:id', async (req, res) => {
  try {
    const { id } = req.params;

    const result = await deleteAdmin(id);

    if (result.error) {
      res.render('pages/404.ejs', { result, title: 'Hotel Backend' });

    } else {
      const admins = await getAdmins();
      res.render('pages/administrators.ejs', { admins, result, title: 'Hotel Backend' })
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
