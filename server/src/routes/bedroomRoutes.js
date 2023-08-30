const express = require('express');
const router = express.Router();
const { createBedroom, getBedrooms, updateBedroom, deleteBedrooms, getBedroomById } = require('../controllers/bedroomControllers');

router.post('/', async (req, res) => {
  try {
    const { kind_h, style, gallery, description_h } = req.body;
    const result = await createBedroom(kind_h, style, gallery, description_h);
    const bedrooms = await getBedrooms();

    if (req.accepts('json')) {
      res.status(201).json({ result, bedrooms });
    } else if (req.accepts('html')) {
      res.render('pages/bedrooms.ejs', { bedrooms, result, title: 'Hotel Backend' });
    } else {
      res.status(406).send('Not Acceptable');
    }

  } catch (error) {
    console.error(error);
    if (req.accepts('json')) {
      res.status(500).json({ error: error.message });
    } else if (req.accepts('html')) {
      res.status(500).json({ error: error.message });
    } else {
      res.status(406).send('Not Acceptable');
    }
  }
});

router.get('/', async (req, res) => {
  try {
    const bedrooms = await getBedrooms();

    if (req.accepts('html')) {
      res.render('pages/bedrooms.ejs', { bedrooms, title: 'Hotel Backend' });
    } else if (req.accepts('json')) {
      res.status(200).json(bedrooms);
    } else {
      res.status(406).send('Not Acceptable');
    }
    
  } catch (error) {
    console.error(error);
    if (req.accepts('json')) {
      res.status(500).json({ error: error.message });
    } else if (req.accepts('html')) {
      res.status(500).json({ error: error.message });
    } else {
      res.status(406).send('Not Acceptable');
    }
  }
});

router.post('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const { kind_h, style, gallery, description_h } = req.body;
    const result = await updateBedroom(id, kind_h, style, gallery, description_h);
    const bedrooms = await getBedrooms();

    if (req.accepts('json')) {
      res.status(201).json(result);
    } else if (req.accepts('html')) {
      res.render('pages/bedrooms.ejs', { result, bedrooms, title: 'Hotel Backend' });
    } else {
      res.status(406).send('Not Acceptable');
    }

  } catch (error) {
    console.error(error);
    if (req.accepts('json')) {
      res.status(500).json({ error: error.message });
    } else if (req.accepts('html')) {
      res.status(500).json({ error: error.message });
    } else {
      res.status(406).send('Not Acceptable');
    }
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
    console.error(error)
    res.status(500).json({ error: error.message });
  }
});

router.post('/delete/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const result = await deleteBedrooms(id);

    if (req.accepts('json')) {
      res.json(result);
    } else if (req.accepts('html')) {
      const bedrooms = await getBedrooms();
      res.render('pages/bedrooms.ejs', { bedrooms, result, title: 'Hotel Backend' });
    } else {
      res.status(406).send('Not Acceptable');
    }

  } catch (error) {
    console.error(error);
    if (req.accepts('json')) {
      res.status(500).json({ error: error.message });
    } else if (req.accepts('html')) {
      res.status(500).json({ error: error.message });
    } else {
      res.status(406).send('Not Acceptable');
    }
  }
});

module.exports = router;
