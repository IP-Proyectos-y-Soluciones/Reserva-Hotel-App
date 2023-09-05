const express = require('express');
const router = express.Router();
const { createBanner, updateBanner, getBanner, deleteBanner } = require('../controllers/bannerControllers');
const { verifyToken } = require('../middlewares/tokenAuthentication')

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

// router.get('/', async (req, res) => {
//   try {
//     const banners = await getBanner();
//     res.render('pages/banner.ejs', {  banners, title: 'Hotel Backend' })
//   } catch (error) {
//     res.status(500).json({ error: error.message });
//   }
// });

router.get('/', async (req, res) => {
  try {
      const banners = await getBanner();
      if (banners.error) {
          return res.status(400).json({ error: banners.error });
      }

      const responseData = { banners, title: 'Hotel Backend' };

      if (req.accepts('html')) {
          // Si el cliente acepta HTML, renderiza la vista
          res.render('pages/banner.ejs', responseData);
      } else if (req.accepts('json')) {
          // Si el cliente acepta JSON, devuelve el JSON
          res.json(banners);
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
      const banners = await getBanner();
      if (banners.error) {
          return res.status(400).json({ error: banners.error });
      }

      const responseData = { banners, title: 'Hotel Backend' };
      res.render('pages/banner.ejs', responseData);

  } catch (error) {
      res.status(500).json({ error: error.message });
  }
});

router.post('/delete/:id', async (req, res) => {
  try {
    const { id } = req.params;

    const result = await deleteBanner(id);

    if (result.error) {
      res.render('pages/404.ejs', { result, title: 'Hotel Backend' });

    } else {
      const banners = await getBanner();
      res.render('pages/banner.ejs', { banners, result, title: 'Hotel Backend' })
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});


module.exports = router;
