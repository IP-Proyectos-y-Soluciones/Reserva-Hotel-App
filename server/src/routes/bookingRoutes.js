const express = require('express');
const router = express.Router();
const { Users } = require("../config/db")
const { listBooking, deleteBooking, createBooking, updateBooking } = require('../controllers/bookingControllers');
const {sendMail} = require("../controllers/sendMailController.js")


router.get('/', async (req, res) => {
  try {
    const bookings = await listBooking();
    res.status(200).json(bookings);
  } catch (error) {
    res.status(500).json({ error: error.message });
    //res.render('pages/booking.ejs', {bookings, title: 'Hotel Backend'})
  }
});


router.delete('/:id_reservation', async (req, res) => {
  try {
    const { id_reservation } = req.params;
    const result = await deleteBooking(id_reservation);
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.put('/:id_reservation', async (req, res) => {
  try {
    const { id_reservation } = req.params;
    const {id_room, id_user, payment_reservation, transaction_number, reservation_description, admission_date, departure_date, reservation_date} = req.body;

    const result = await updateBooking(id_reservation,
        id_room,
        id_user,
        payment_reservation,
        transaction_number,
        reservation_description,
        admission_date,
        departure_date,
        reservation_date);
    
  
    const user = await Users.findOne({ where: { id: id_user } });
    const email = user.email;

 
    let subject = "UPDATED YOUR RESERVACION"
    let text = `YOUR NEW RESERVACION IS ${reservation_description, admission_date, departure_date, reservation_date}`
    sendMail(email, subject, text)

    res.status(200).json(result);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});




router.post('/', async (req, res) => {
  try {
    const { id_room, id, payment_reservation, transaction_number, reservation_description, admission_date, departure_date, reservation_date } = req.body;
    const result = await createBooking({
      id_room,
      id,
      payment_reservation,
      transaction_number,
      reservation_description,
      admission_date,
      departure_date,
      reservation_date
    });

    const user = await Users.findOne({ where: { id } });
    const email = user.email;

    let subject = "Su reserva se ha realizado con éxito."
    let text = `SU RESERVA ES ${reservation_description}, DESDE ${admission_date} A ${departure_date}`
    sendMail(email, subject, text)

    res.status(200).json(result);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
