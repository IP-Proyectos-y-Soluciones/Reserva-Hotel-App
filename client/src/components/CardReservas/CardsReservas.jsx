import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { useSelector, useDispatch } from "react-redux";
import { getUsers } from '../../redux/actions/userActions';
import { Link } from 'react-router-dom';

const cardStyle = {
  display: "inline-block",
  border: "1px solid #ccc",
  padding: "16px",
  borderRadius: "4px",
  margin: "16px",
  boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
};

const dateStyle = {
  display: "block",
  margin: "8px 0",
  fontSize: "14px",
};

const statusStyle = {
  color: "red",
  fontWeight: "bold",
};

const activeStyle = {
  color: "green",
  fontWeight: "bold",
};
const buttonStyle = {
  background: "#007BFF",
  color: "#fff",
  border: "none",
  padding: "8px 16px",
  borderRadius: "4px",
  cursor: "pointer",
  marginRight: "8px",
};

const CardReservas = ({
  admission_date,
  departure_date,
  payment_reservation,
  reservation_description,
  id_reservation,
  id_user,
  cancelar,
  onCancel,
  id_room,
  getBedroom
}) => {
  const dispatch = useDispatch();
  const userId = useSelector((state) => state.users.loggedInUserId);

  useEffect(() => {
    dispatch(getUsers());
  }, [dispatch]);

  const isCurrentUserReservation = id_user === userId;

  return (
    <div key={id_reservation} style={isCurrentUserReservation ? cardStyle : {}}>
      {isCurrentUserReservation ? (
        <div>
          <span style={dateStyle}>
            <strong>Fecha de entrada:</strong> {admission_date}
          </span>
          <span style={dateStyle}>
            <strong>Fecha de lanzamiento:</strong> {departure_date}
          </span>
          <p><strong>Cantidad pagada:</strong> {payment_reservation}</p>
          <p><strong>Reservation:</strong> {reservation_description}</p>
          <Link to={`/detail/${id_room}`}>
            <button style={buttonStyle} onClick={() => getBedroom(id_room)}>Ver Habitación</button>
          </Link>

          {cancelar ? (
            <p style={statusStyle}>Cancelado</p>
          ) : (
            <p style={activeStyle}>Activo</p>
          )}

          {!cancelar && (
            <button onClick={() => onCancel(id_reservation)} style={buttonStyle}>Cancelar</button>
          )}
        </div>
      ) : (
        <div>
          <span>😊</span>
        </div>
      )}
    </div>
  );
}

CardReservas.propTypes = {
  admission_date: PropTypes.string.isRequired,
  departure_date: PropTypes.string.isRequired,
  payment_reservation: PropTypes.string.isRequired,
  reservation_description: PropTypes.string.isRequired,
  id_reservation: PropTypes.number.isRequired,
  id_user: PropTypes.number.isRequired,
  cancelar: PropTypes.bool.isRequired,
  onCancel: PropTypes.func.isRequired,
};

export default CardReservas;
