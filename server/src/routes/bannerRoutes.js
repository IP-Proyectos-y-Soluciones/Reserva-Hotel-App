const express = require('express');
const router = express.Router();
const { createBanner, updateBanner, getBanner, deleteBanner } = require('../controllers/bannerControllers');

router.post('/', async (req, res) => {
  try {
    const { img } = req.body;
    const result = await createBanner(img);
    const banners = await getBanner()
    res.render('pages/banner.ejs', {  result, banners, title: 'Hotel Backend' })
    //res.status(201).json(result);
  } catch (error) {
    console.error(error)
    res.status(500).json({ error: error.message });
  }
});

router.post('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const { img } = req.body;
    const banners = await getBanner()
    const result = await updateBanner(id, img);
    res.render('pages/banner.ejs', {  result, banners, title: 'Hotel Backend' })
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.get('/', async (req, res) => {
  try {
    const banners = await getBanner();
    res.render('pages/banner.ejs', {  banners, title: 'Hotel Backend' })
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.post('/delete/:id', async (req, res) => {
  try {
    const { id } = req.params;

    const result = await deleteBanner(id);

    if (result.error) {
      res.status(404).json({ error: result.error });
    } else {
      const banners = await getBanner();
      res.render('pages/banner.ejs', { banners, result, title: 'Hotel Backend' })
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});


module.exports = router;
