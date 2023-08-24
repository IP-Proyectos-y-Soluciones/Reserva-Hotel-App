const express = require('express');
const router = express.Router();
const { createBedroom, getBedrooms, updateBedroom, deleteBedroom, getBedroomById } = require('../controllers/bedroomControllers');

router.post('/', async (req, res) => {
  try {
    const { kind_h, style, gallery, video, virtual_tour, description_h } = req.body;
    const result = await createBedroom(kind_h, style, gallery, video, virtual_tour, description_h);
    res.json(result);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.get('/', async (req, res) => {
  try {
    const result = await getBedrooms();
    res.json(result);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.put('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const { kind_h, style, gallery, video, virtual_tour, description_h } = req.body;
    const result = await updateBedroom(id, kind_h, style, gallery, video, virtual_tour, description_h);
    res.json(result);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.get('/detail/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const result = await getBedroomById(id);
    if (result.error) {
      res.status(404).json({ error: result.error });
    } else {                             
      res.json(result);
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});


router.delete('/:id', async (req, res) => {
    try {
      const {id} = req.params;
  
      const result = await deleteBedroom(id);
      
      if (result.error) {
        res.status(404).json({ error: result.error });
      } else {
        res.status(200).json({ message: 'Bedroom silindi' });
      }
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  });
module.exports = router;
