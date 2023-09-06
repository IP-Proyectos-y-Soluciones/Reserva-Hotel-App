
import React, { useEffect } from "react";
import CardReservas from "../CardReservas/CardReservas";
import { useSelector, useDispatch } from "react-redux";
import { getBookings } from "../../redux/actions/bookingActions";

function CardsReservas() {
  const dispatch = useDispatch();
  const { allBookings } = useSelector((state) => state.bookings.bookings);

  console.log(allBookings);
  
  useEffect(() => {
    
    dispatch(getBookings());
    
  }, [dispatch, allBookings]);

  

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4" id='bookings'>
      { !allBookings ? <div>loading...</div> : allBookings.map((booking) => (
        <CardReservas
          key={booking.id_reservation}
          admission_date={booking.admission_date}
          departure_date={booking.departure_date}
          payment_reservation={booking.payment_reservation}
          reservation_description={booking.reservation_description}
          id_reservation={booking.id_reservation}
        />
      ))}
    </div>
  );
}

export default CardsReservas;
