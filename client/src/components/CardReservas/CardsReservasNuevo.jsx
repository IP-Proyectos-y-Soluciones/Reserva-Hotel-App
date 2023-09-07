import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { useDispatch, useSelector } from "react-redux";
import { getAllBookings, cancelBookings } from "../../redux/actions/bookingActions";
import { getBedroomId } from "../../redux/actions/bedroomsActions";
import CardsReservas from "./CardsReservas";

const cardContainerStyle = {
  display: "flex",
  flexWrap: "wrap",
  gap: "20px",
};

const loadingStyle = {
  fontSize: "18px",
  fontWeight: "bold",
};

const CardsReservasNuevo = () => {
  const { allBookings } = useSelector((state) => state.bookings);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllBookings());
  }, [dispatch]);

  const handleCancelBooking = (id_reservation) => {
    dispatch(cancelBookings({ id: id_reservation }));
  };

  const handleBedroom = (id_room) => {
    dispatch(getBedroomId(id_room));
  };

  return (
    <div style={cardContainerStyle}>
      {!allBookings ? (
        <div style={loadingStyle}>Loading...</div>
      ) : (
        allBookings.map((booking) => (
          <CardsReservas
            key={booking.id_reservation}
            admission_date={booking.admission_date}
            departure_date={booking.departure_date}
            payment_reservation={booking.payment_reservation}
            reservation_description={booking.reservation_description}
            id_reservation={booking.id_reservation}
            id_user={booking.id_user}
            cancelar={booking.isCancelled}
            id_room={booking.id_room}
            onCancel={() => handleCancelBooking(booking.id_reservation)}
            getBedroom={() => handleBedroom(booking.id_room)}
          />
        ))
      )}
    </div>
  );
};

CardsReservasNuevo.propTypes = {
  admission_date: PropTypes.string.isRequired,
  departure_date: PropTypes.string.isRequired,
  payment_reservation: PropTypes.string.isRequired,
  reservation_description: PropTypes.string.isRequired,
  id_reservation: PropTypes.number.isRequired,
  id_user: PropTypes.number.isRequired,
  cancelar: PropTypes.bool.isRequired,
  onCancel: PropTypes.func.isRequired,
};

export default CardsReservasNuevo;
