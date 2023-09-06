import React, {useEffect} from "react";
import PropTypes from "prop-types";
import { useSelector, useDispatch } from "react-redux";
import { getAllBookings } from "../../redux/actions/bookingActions";

function ReservasCards({admission_date, departure_date, payment_reservation, reservation_description, id_reservation}) {
  console.log(admission_date, departure_date, payment_reservation, reservation_description, id_reservation )
  const dispatch = useDispatch();
  const bookings = useSelector((state) => state.bookings.allBookings);



useEffect(() => {
    dispatch(getAllBookings());
    console.log(bookings)
  }, [dispatch]);

 


    return (
        <div key={id_reservation}>
         <span style={{ display: "inline-block" }}>Fecha de entrada: {admission_date}</span> 
         <span style={{ display: "inline-block" }}>  Fecha de lanzamiento: {departure_date}</span>
        <p>Cantidad pagada: {payment_reservation}</p>
        <p>Reservation: {reservation_description}</p>
        <p>{id_reservation}</p>
        </div>
      );
}

ReservasCards.propTypes = {
  admission_date: PropTypes.string.isRequired,
  departure_date: PropTypes.string.isRequired,
  payment_reservation: PropTypes.string.isRequired,
  reservation_description: PropTypes.string.isRequired,
  id_reservation: PropTypes.number.isRequired,
};
  

export default ReservasCards;