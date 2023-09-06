import React, {useEffect} from "react";
import PropTypes from "prop-types";
import { useSelector, useDispatch } from "react-redux";
import { getAllBookings, deleteBookings } from "../../redux/actions/bookingActions";
import { getUsers } from "../../redux/actions/userActions";

function ReservasCards({admission_date, departure_date, payment_reservation, reservation_description}) {


const dispatch = useDispatch();
  const { allBookings } = useSelector((state) => state.bookings);
 const user = useSelector((state) => state.users.user.userId);
    
useEffect(() => {
    dispatch(getUsers());
    dispatch(getAllBookings());
    console.log(admission_date)
  }, [dispatch]);

 

  const filterUserBookings = (booking) => {
    return user.includes(booking.id_user);
  };

  const filteredBookings = allBookings.filter(filterUserBookings);
  console.log(user)
 console.log(filteredBookings)
    
    return (
        <div >
         <span style={{ display: "inline-block" }}>Fecha de entrada: {admission_date} </span> 
         <span style={{ display: "inline-block" }}>  Fecha de lanzamiento: {departure_date}</span>
        <p>Cantidad pagada: {payment_reservation}</p>
        <p>Reservation: {reservation_description}</p>
        </div>
      );
}

ReservasCards.propTypes = {
    id_reservation: PropTypes.number.isRequired,
    admission_date: PropTypes.string.isRequired,
    departure_date: PropTypes.string.isRequired,
    payment_reservation: PropTypes.string.isRequired,
    reservation_description: PropTypes.string.isRequired,
  };
  

export default ReservasCards;
