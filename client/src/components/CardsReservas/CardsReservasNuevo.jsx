import CardReservas from "../CardReservas/CardReservas";
import { getAllBookings } from "../../redux/actions/bookingActions";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

const CardsReservasNuevo = ()=>{

    const { allBookings } = useSelector((state)=>state.bookings)
    console.log(allBookings);

    const dispatch = useDispatch();
    useEffect(()=>{
        dispatch(getAllBookings())
    },[dispatch])


    return(
        <div>
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
    )
};
export default CardsReservasNuevo;