const express = require("express");
const router = express.Router();

const {createRestaurant, updateRestaurant, deleteRestaurant, getAllRestaurants} = require('../controllers/restaurantControllers')

router.post('/', async (req, res) => {
    
    try {
        const { img, description } = req.body

        const newRestaurant = await createRestaurant(img, description)
        if (newRestaurant.error) {
            res.render('pages/404.ejs', { newRestaurant, title: 'Hotel Backend' });
        } else {
            // res.status(201).json(newRestaurant)
            const getRestaurants = await getAllRestaurants()
            res.render('pages/restaurant.ejs', {newRestaurant, getRestaurants, title: 'Hotel Backend'})
        }
    } catch (error) {
        res.status(500).json({ error: 'Internal server error' })
    }
})

//ACTUALIZAR
router.post('/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const { img, description} = req.body

        const updatedRestaurant = await updateRestaurant(id, img, description)
        if (updatedRestaurant.error) {
            res.render('pages/404.ejs', { updatedRestaurant, title: 'Hotel Backend' });
        } else {
            //res.status(201).json(updatedRestaurant)
            const getRestaurants = await getAllRestaurants()
            res.render('pages/restaurant.ejs', {updatedRestaurant, getRestaurants, title: 'Hotel Backend'})
        }
    } catch (error) {
        res.status(500).json({ error: 'Internal server error' })
    }
})

//ELIMINAR
router.post('/delete/:id', async (req, res) => {
    try {
        const {id} = req.params

        const deletedRestaurant = await deleteRestaurant(id)
        if (deletedRestaurant.error) {
            res.render('pages/404.ejs', { deletedRestaurant, title: 'Hotel Backend' });
        } else {
            //res.status(201).json(deletedRestaurant)
            const getRestaurants = await getAllRestaurants()
            res.render('pages/restaurant.ejs', {deletedRestaurant, getRestaurants, title: 'Hotel Backend'})
        }
    } catch (error) {
        res.status(500).json({ error: 'Internal server error' })
    }
})

// router.get('/', async (req, res) => {

//     try {

//         const getRestaurants = await getAllRestaurants()
//         if (getRestaurants.error) {
//             res.render('pages/404.ejs', { getRestaurants, title: 'Hotel Backend' });
//         } else {
//             //res.status(201).json(getRestaurants)
//             res.render('pages/restaurant.ejs', { getRestaurants, title: 'Hotel Backend' });
//         }
//     } catch (error) {
//         res.status(500).json({ error: 'Internal server error' })
//     }
// })

router.get('/', async (req, res) => {
    try {
        const getRestaurants = await getAllRestaurants();
        if (getRestaurants.error) {
            return res.status(400).json({ error: getRestaurants.error });
        }
  
        const responseData = { getRestaurants, title: 'Hotel Backend' };
  
        if (req.accepts('html')) {
            // Si el cliente acepta HTML, renderiza la vista
            res.render('pages/restaurant.ejs', responseData);
        } else if (req.accepts('json')) {
            // Si el cliente acepta JSON, devuelve el JSON
            res.json(getRestaurants);
        } else {
            // Si el cliente no acepta ni HTML ni JSON, devuelve un error
            res.status(406).send('Not Acceptable');
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
  });

module.exports = router;