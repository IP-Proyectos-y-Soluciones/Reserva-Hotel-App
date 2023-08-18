const express = require('express');
const router = express.Router();
const { listBooking, deleteBooking, createBooking, updateBooking } = require('../controllers/bookingControllers');
const {sendMail} = require("../controllers/sendMailController")

// Liste fonksiyonu
router.get('/', async (req, res) => {
  try {
    const bookings = await listBooking();
    res.status(200).json(bookings);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Silme fonksiyonu
router.delete('/:id_reservation', async (req, res) => {
  try {
    const { id_reservation } = req.params;
    const result = await deleteBooking(id_reservation);
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Güncelleme fonksiyonu
router.put('/:id_reservation', async (req, res) => {
  try {
    const {id_room, id_user, payment_reservation, transaction_number, reservation_description, admission_date, departure_date, reservation_date} = req.body;

    const result = await updateBooking(id_reservation,
        id_room,
        id_user,
        payment_reservation,
        transaction_number,
        reservation_description,
        admission_date,
        departure_date,
        reservation_date,);
        let subject = "UPDATED YOUR RESERVACION"
        let text = `YOUR NEW RESERVACION IS ${reservation_description, admission_date, departure_date, reservation_date}`
        //todavia por aca falta email por relacion de controllers
        sendMail(email, subject, text)
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Oluşturma fonksiyonu
router.post('/', async (req, res) => {
  try {
    const {id_room, id_user, payment_reservation, transaction_number, reservation_description, admission_date, departure_date, reservation_date} = req.body;
    const result = await createBooking(id_room,
        id_user,
        payment_reservation,
        transaction_number,
        reservation_description,
        admission_date,
        departure_date,
        reservation_date,);
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
