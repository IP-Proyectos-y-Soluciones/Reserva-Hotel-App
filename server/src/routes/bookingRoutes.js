const express = require('express');
const router = express.Router();
const  { Users }  = require("../config/db")
const { listBooking, deleteBooking, createBooking, updateBooking } = require('../controllers/bookingControllers');
const { verifyToken } = require('../middlewares/tokenAuthentication')
const { transporter } = require( '../controllers/sendMailController' );
require('dotenv').config();


// router.get('/', async (req, res) => {
//   try {
//     const bookings = await listBooking();
//     //res.status(200).json(bookings);
//     res.render('pages/bookings.ejs', {bookings, title: 'Hotel Backend'})
//   } catch (error) {
//     res.status(500).json({ error: error.message });


//     res.render('pages/booking.ejs', {bookings, title: 'Hotel Backend'})

//   }
// });

router.get('/', async (req, res) => {
  try {
      const bookings = await listBooking();
      
      if (bookings.error) {
          return res.status(400).json({ error: bookings.error });
      }

      const responseData = { bookings, title: 'Hotel Backend' };

      if (req.accepts('html')) {
          // Si el cliente acepta HTML, renderiza la vista
          res.render('pages/bookings.ejs', responseData);
      } else if (req.accepts('json')) {
          // Si el cliente acepta JSON, devuelve el JSON
          res.json(bookings);
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
      const bookings = await listBooking();
      if (bookings.error) {
          return res.status(400).json({ error: bookings.error });
      }

      const responseData = { bookings, title: 'Hotel Backend' };
      res.render('pages/bookings.ejs', responseData);

  } catch (error) {
      res.status(500).json({ error: error.message });
  }
});


//router.delete('/:id_reservation', async (req, res) => {
//ELIMINAR
router.post('/delete/:id_reservation', async (req, res) => {
  try {
    const { id_reservation } = req.params;

    const user = await Users.findOne( { where: { id: id_user } } );
    const email = user.email;

    const deletedBooking = await deleteBooking(id_reservation);
    const bookings = await listBooking();
    //res.status(200).json(result);

    let subject = "CANCELAR RESERVA";
    let text = `El reserva ha sido eliminado con éxito. ¡Hasta luego, Hotel PF! ${id_reservation}`;

      transporter(email, subject, text)
      
    res.render('pages/bookings.ejs', {deletedBooking, bookings, title: 'Hotel Backend'})
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.put('/:id_reservation', async (req, res) => {
  try {
    const { id_reservation } = req.params;
    const {
      id_room,
      id_user,
      payment_reservation,
      transaction_number,
      reservation_description,
      admission_date,
      departure_date,
      reservation_date,
    } = req.body;

    const result = await updateBooking(
      id_reservation,
      id_room,
      id_user,
      payment_reservation,
      transaction_number,
      reservation_description,
      admission_date,
      departure_date,
      reservation_date
    );

    const user = await Users.findOne( { where: { id: id_user } } );
    const email = user.email;

    const text = `SU NUEVA RESERVA ES ${reservation_description}, Fecha de Entrada: ${admission_date}, Fecha de Salida: ${departure_date}, Fecha de Reserva: ${reservation_date}`;
    const subject = 'ACTUALIZADA SU RESERVA';
    
    transporter(email, subject, text)
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});


function generateRandomCode() {
  const min = 1000;
  const max = 9999;
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

router.post('/', async (req, res) => {
  try {

    //const { id_room, id, payment_reservation, transaction_number, reservation_code, reservation_description, admission_date, departure_date, reservation_date } = req.body;
    const { id_room, id, payment_reservation, transaction_number, reservation_description, admission_date, departure_date, reservation_date } = req.body;
    const reservation_code = generateRandomCode();

    const result = await createBooking({
      id_room,
      id,
      payment_reservation,
      transaction_number,
      reservation_code,
      reservation_description,
      admission_date,
      departure_date,
      reservation_date
    });
    const user = await Users.findOne({ where: { id } });
    const email = user.email;

    const subject = "Su reserva se ha realizado con éxito."
    const text = `SU RESERVA ES ${ reservation_description }, DESDE ${ admission_date } A ${ departure_date }, SU CÓDIGO DE RESERVA ES ${ reservation_code }`
    
    transporter(email, subject, text)

    res.status(200).json(result);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});




module.exports = router;
