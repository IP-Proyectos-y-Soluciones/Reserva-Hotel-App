const express = require('express');
const router = express.Router();
const {
  getAllCategories,
  createCategory,
  updateCategory,
  deleteCategory
} = require('../controllers/categoriesController');


router.get('/', async (req, res) => {
  const categories = await getAllCategories();
  res.json(categories);
});

// POST /categories - Yeni bir kategori oluşturur
router.post('/', async (req, res) => {
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
  res.json(newCategory);
});


router.put('/:id', async (req, res) => {
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
  res.json(result);
});


router.delete('/:id', async (req, res) => {
  const { id } = req.params;
  const result = await deleteCategory(id);
  res.json(result);
});

module.exports = router;
