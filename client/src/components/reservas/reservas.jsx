import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getBookings } from "../../redux/actions/bookingActions"
//import { getUsers } from "../../redux/actions/userActions"


function Reservas() {
  const dispatch = useDispatch();
  //const UserId = useSelector(state => state.users)
  const userBookings = useSelector(state => state.bookings);
 // const user = UserId.usersCopy.map(user => user.id);


  useEffect(() => {
    dispatch(getBookings());
    console.log(userBookings)
  }, [dispatch]);

  //const filteredBookings = userBookings.filter(
    //booking => booking.id_user === user
  //);


  return (
    <div>
      <h1>Reservas</h1>
      <ul>
        {
        //filteredBookings.map(booking => (
          //<li key={booking.id_reservation}>
            //{booking.admission_date} - {booking.departure_date}
          //</li>
        //))
        }
      </ul>
    </div>
  );
}

export default Reservas;
