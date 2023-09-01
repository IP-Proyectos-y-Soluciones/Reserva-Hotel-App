import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getAllBookings } from "../../../redux/actions/bookingActions";
import { getUsers } from "../../../redux/actions/userActions";
import ReservasCards from "../ReservasCards"




function ReservasCard() {
  const dispatch = useDispatch();
  const UserId = useSelector((state) => state.users);
  const { allBookings } = useSelector((state) => state.bookings);
  const user = UserId.usersCopy.map((user) => user.id);

    
useEffect(() => {
    dispatch(getUsers());
    dispatch(getAllBookings());
  }, [dispatch]);


  const filterUserBookings = (booking) => {
    return user.includes(booking.id_user);
  };

  const filteredBookings = allBookings.filter(filterUserBookings);

 
  return (
    <div>
 
      
        {filteredBookings && filteredBookings.map((e) => (
         <ReservasCards

         key={e.id_reservation}
         id_reservation={e.id_reservation}
         admission_date={e.admission_date}
         departure_date={e.departure_date}
         payment_reservation={e.payment_reservation}
         reservation_description={e.reservation_description}

       />
          
       
        ))}
      
    </div>
  );
}



export default ReservasCard;
