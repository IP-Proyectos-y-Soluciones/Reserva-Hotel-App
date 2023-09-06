
import React, { useEffect } from "react";
import ReservasCards from "./ReservasCards";
import { useSelector, useDispatch } from "react-redux";
import { getAllBookings } from "../../redux/actions/bookingActions";

function ReservasCard() {
  const dispatch = useDispatch();
  const allBookings = useSelector((state) => state.bookings.allBookings);
console.log("cars", allBookings)
  
  useEffect(() => {
    dispatch(getAllBookings());
  }, [dispatch, allBookings]);


  

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4" id='bookings'>
      {allBookings.map((booking) => (
        <ReservasCards
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

export default ReservasCard;
