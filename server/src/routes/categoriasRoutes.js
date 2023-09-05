const express = require('express');
const router = express.Router();
const { getAllCategories, createCategory, updateCategory, deleteCategory } = require('../controllers/categoriesControllers');
const { verifyToken } = require('../middlewares/tokenAuthentication')

router.post('/', async (req, res) => {
  try {
    const { route, color, kind, img, description, includes, continental_alta, continental_baja, americano_alta, americano_baja } = req.body;
    const newCategory = await createCategory(
      route,
      color,
      kind,
      img,
      description,
      includes,
      continental_alta,
      continental_baja,
      americano_alta,
      americano_baja
    );
    const cats = await getAllCategories();
    res.render('pages/categories.ejs', { cats, newCategory, title: 'Hotel Backend' });
  } catch (error) {
    console.error(error);
    res.status(500).send('An error occurred');
  }
});

router.post('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const { route, color, kind, img, description, includes, continental_alta, continental_baja, americano_alta, americano_baja } = req.body;
    const result = await updateCategory(
      id,
      route,
      color,
      kind,
      img,
      description,
      includes,
      continental_alta,
      continental_baja,
      americano_alta,
      americano_baja
    );
    const cats = await getAllCategories();
    res.render('pages/categories.ejs', { cats, result, title: 'Hotel Backend' });
  } catch (error) {
    console.error(error);
    res.status(500).send('An error occurred');
  }
});

router.post('/delete/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const result = await deleteCategory(id);
    const cats = await getAllCategories();
    res.render('pages/categories.ejs', { cats, result, title: 'Hotel Backend' });
  } catch (error) {
    console.error(error);
    res.status(500).send('An error occurred');
  }
});

router.get('/', async (req, res) => {
  try {
      const cats = await getAllCategories();
      if (cats.error) {
          return res.status(400).json({ error: cats.error });
      }

      const responseData = { cats, title: 'Hotel Backend' };

      if (req.accepts('html')) {
          // Si el cliente acepta HTML, renderiza la vista
          res.render('pages/categories.ejs', responseData);
      } else if (req.accepts('json')) {
          // Si el cliente acepta JSON, devuelve el JSON
          res.json(cats);
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
      const cats = await getAllCategories();
      if (cats.error) {
          return res.status(400).json({ error: cats.error });
      }

      const responseData = { cats, title: 'Hotel Backend' };
      res.render('pages/categories.ejs', responseData);

  } catch (error) {
      res.status(500).json({ error: error.message });
  }
});

module.exports = router;
