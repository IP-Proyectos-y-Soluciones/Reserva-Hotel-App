
const { Users } = require("../config/db")
const { Bookings2 } = require("../config/db")
const { Bookings } = require("../config/db")



const createBooking = async ({ id_room, id, payment_reservation, transaction_number, reservation_code, reservation_description, admission_date, departure_date, reservation_date }) => {

  try {
    const user = await Users.findOne({ where: { id } });
    if (!user) {
      throw new Error('User not found');
    }

    const booking = await Bookings.create({
      id_user: id,
      payment_reservation,
      transaction_number,
      reservation_code: '',
      reservation_description, 
      admission_date,
      departure_date, 
      reservation_date,
      id_room
    });

    // const booking2 = await Bookings2.create({
    //   id_room,
    //   admission_date,
    //   departure_date,
    // });

    //return { booking, booking2 };
    return { booking };
  } catch (error) {
    return { error: error.message };
  }
}






const updateBooking = async (
  id_reservation,
  {
    id_room,
    id_user,
    payment_reservation,
    transaction_number,
    reservation_description,
    admission_date,
    departure_date,
    reservation_date,
  }
) => {
  try {

    const user = await Users.findOne({ where: { id_u: id_user } });

    if (!user) {
      throw new Error('User not found');
    }

    const [updated] = await Bookings.update(
      {
        id_room,
        id_user,
        payment_reservation,
        transaction_number,
        reservation_description,
        admission_date,
        departure_date,
        reservation_date,
      },
      { where: { id_reservation: id_reservation } }
    );

    const [updated2] = await Bookings2.update(

      {
        id_room,
        admission_date,
        departure_date,
      },
      { where: { id: id_reservation } }
    );


    if (updated && updated2) {
      const updatedBooking = await Bookings.findOne({ where: { id_reservation: id_reservation } });
      const updatedBooking2 = await Bookings2.findOne({ where: { id: id_reservation } });
      return { updatedBooking, updatedBooking2 };
    }
    throw new Error('Booking not found');
  }
  catch (error) {

    return { error: error.message };
  }
}

const cancelBooking = async (id_reservation) => {
  try {
    const booking = await Bookings.findOne({ where: { id_reservation: id_reservation } });
    if (!booking) {
      throw new Error('Booking not found');
    }
    console.log("booking: ", booking);

    let user = null;
    if (booking.id_user) {
      user = await Users.findOne({ where: { id: booking.id_user } });
      if (!user) {
        throw new Error('User not found');
      }
    } else {
      throw new Error('User ID is not defined');
    }

    const updated = await Bookings.update({ isCancelled: true }, { where: { id_reservation: id_reservation } });
    if (updated) {
      return { message: 'Booking cancelled successfully' };
    }
    throw new Error('Booking not found');
  }
  catch (error) {
    console.error(error)
    return { error: error.message };
  }
}






const listBooking = async () => {
  try {
    const booking1 = await Bookings.findAll({
      include: Users
    });
    // const booking2 = await Bookings2.findAll({
    //   include: Users
    // });
    //return { booking1, booking2 }
    return booking1
  }
  catch (error) {

    return { error: error.message };
  }
};



module.exports = {
  listBooking,
  cancelBooking,
  updateBooking,
  createBooking
}

