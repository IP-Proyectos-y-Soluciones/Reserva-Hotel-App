const express = require('express');
const router = express.Router();
const { createBedroom, getBedrooms, updateBedroom, deleteBedroom, getBedroomById } = require('../controllers/bedroomControllers');



router.post('/', async (req, res) => {
  try {
    const { kind_h, style, gallery, description_h } = req.body;
    const result = await createBedroom(kind_h, style, gallery, description_h);
    const bedrooms = await getBedrooms();
    //res.render('pages/bedrooms.ejs', {  result, bedrooms, title: 'Hotel Backend' })
    res.status(201).json(result)
  } catch (error) {
    console.error(error)
    res.status(500).json({ error: error.message });
  }
});

router.get('/', async (req, res) => {
  try {
    const bedrooms = await getBedrooms();
    //res.render('pages/bedrooms.ejs', { bedrooms, title: 'Hotel Backend' })
    res.status(201).json(bedrooms)
  } catch (error) {
    console.error(error)
    res.status(500).json({ error: error.message });
  }
});

router.put('/:id', async (req, res) => {
  try {

    const { id } = req.params;

    const { kind_h, style, gallery, description_h } = req.body;

    const result = await updateBedroom(id, kind_h, style, gallery, description_h);
   const bedrooms = await getBedrooms();
    //res.render('pages/bedrooms.ejs', {  result, bedrooms, title: 'Hotel Backend' })
    res.status(201).json(result)
  } catch (error) {
    console.error(error)
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
    console.error(error)
    res.status(500).json({ error: error.message });
  }
});



router.delete('/delete/:id', async (req, res) => {
    try {
      const { id } = req.params;
  
      const result = await deleteBedroom(id);
      if (result.error) {
        res.status(404).json({ error: result.error });
        console.log(error)
      } else {
      const bedrooms = await getBedrooms();
      //res.render('pages/bedrooms.ejs', {  result, bedrooms, title: 'Hotel Backend' })
        res.json(result)
      }
    } catch (error) {
      console.error(error)
      res.status(500).json({ error: error.message });
    }
  });


module.exports = router;