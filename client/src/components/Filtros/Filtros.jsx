import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { getBookings } from '../../redux/actions/bookingActions';

const Filtros = () => {

    const dispatch = useDispatch();
    useEffect(()=>{
        dispatch(getBookings())
    },[]);

    const { bookings } = useSelector((state)=>state.bookings);
    const { booking1 } = bookings;
    console.log(booking1);

    // const eachPayment = booking1.map(booking=>{
    //     return {
    //         key:booking.id,
    //         payment:booking.payment_reservation
    //     }
    // });

    // console.log(eachPayment);

    
   



    // const {booking1} = bookings; //[0:{},user:{}]
    // const array = booking1[0];
    // const {payment_reservation} = array;
   
    
    

    // const eachPayment = bookingsFiltered.filter(booking=>{
    //     return {
    //         payment_reservation: booking.payment_reservation
    //     }
    // })
    

    // function handleOrder(e) {
    //     e.preventDefault()
    //     if(e.target.value === '') {
    //         dispatch(getVideogames())
    //     } else {
    //         dispatch(filterByOrder(e.target.value))
    //         setCurrentPage(1)
    //     }
    //   }
    //   function handleDisp(e) {
    //     e.preventDefault()
    //     if(e.target.value === '') {
    //         dispatch(getVideogames())
    //     } else {
    //         dispatch(filterByOrigin(e.target.value))
    //         setCurrentPage(1)
    //     }
    //   }

    return(
        
        <div>
           
            
        <select onChange={e => handleOrder(e)} data-te-select-init>
            <option value="" >Ordenar por</option>
            <option value="menor-mayor" >Menor precio</option>
            <option value="mayor-menor" >Mayor precio</option>            
        </select>        

        <select onChange={e => handleDisp(e)}>
            <option value=''>Filtrar por</option>
            <option value="disponible">Disponible</option>
            <option value="no disponible">No disponible</option>
        </select>

        </div>
        
        
    )
};

export default Filtros;