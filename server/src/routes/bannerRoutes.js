const express = require('express');
const router = express.Router();
const { createBanner, updateBanner, getBanner } = require('../controllers/bannerControllers');

router.post('/', async (req, res) => {
  try {
    const { img } = req.body;
    const result = await createBanner(img);
    res.json(result);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.put('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const { img, date } = req.body;
    const result = await updateBanner(id, img, date);
    res.json(result);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.get('/', async (req, res) => {
  try {
    const result = await getBanner();
    res.json(result);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
