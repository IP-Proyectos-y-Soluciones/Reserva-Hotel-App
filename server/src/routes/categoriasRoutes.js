const express = require('express');
const router = express.Router();
const { getAllCategories, createCategory, updateCategory, deleteCategory } = require('../controllers/categoriesControllers');

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
    res.render('pages/categories.ejs', { cats, title: 'Hotel Backend' });
  } catch (error) {
    console.error(error);
    res.status(500).send('An error occurred');
  }
});

module.exports = router;
