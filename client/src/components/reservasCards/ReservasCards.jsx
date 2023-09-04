import React from "react";
import PropTypes from "prop-types";
import { useSelector } from "react-redux";


function ReservasCards({ id_reservation, admission_date, departure_date, payment_reservation, reservation_description }) {
console.log(id_reservation)

const userId = useSelector((state) => state.users.user.userId);
console.log(userId)
    
    return (
        <div >
         <span style={{ display: "inline-block" }}>Fecha de entrada: {admission_date}</span> 
         <span style={{ display: "inline-block" }}>Fecha de lanzamiento: {departure_date}</span>
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
