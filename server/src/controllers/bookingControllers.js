
const Users = require("../config/db")
const Bookings2 = require("../config/db")
const Bookings = require("../config/db")



const createBooking = async ({
    id_room, 
    id_user, 
    payment_reservation, 
    transaction_number,
    reservation_code, 
    reservation_description, 
    admission_date,
    depertura_data, 
    reservation_date}) => {

       try {

        const user = await Users.findOne({ where: { id_u: id_user } });
        if (!user) {
            throw new Error('User not found');
        }

        const books = await Bookings.create({
            id_user, 
            payment_reservation, 
            transaction_number,
            reservation_code, 
            reservation_description, 
            admission_date,
            depertura_data, 
            reservation_date
        })
        const books2 = await Bookings2.create({
            id_room,
            admission_date,
            departure_date,
        })
        return {books, books2}
        
       }
       catch(error) {
     
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
    catch(error) {
      
        return { error: error.message };
       }
}





const deleteBooking = async (id_reservation) => {
  try {

    const booking = await Bookings.findOne({ where: { id_reservation: id_reservation } });


    if (!booking) {
        throw new Error('Booking not found');
    }


    const user = await Users.findOne({ where: { id_u: booking.id_user } });
    if (!user) {

        throw new Error('User not found');
    }
    const deleted = await Bookings.destroy({ where: { id_reservation: id_reservation } });

    const deleted2 = await Bookings2.destroy({ where: { id: id_reservation } });

    if (deleted && deleted2) {

      return { message: 'Booking deleted successfully' };
    }

    throw new Error('Booking not found');
  } 
  catch(error) {
 
    return { error: error.message };
   }
}





 const listBooking = async () => {
    try {
        const booking1 = await Bookings.findAll({
            include: Users
        });
        const booking2 = await Bookings2.findAll({
            include: Users
        });
        return {booking1, booking2}
    }
    catch(error) {

        return { error: error.message };
       }
};



module.exports = {
  listBooking,
  deleteBooking,
  updateBooking,
  createBooking
}

