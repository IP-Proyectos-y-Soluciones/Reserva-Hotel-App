import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { getBedroom } from '../../redux/actions/bedroomsActions';
import { getBookings } from '../../redux/actions/bookingActions';

const FormDisponibilidad = () =>{

    const [form, setForm] = useState({
        kind:'',
        dateCheckIn: '',
        dateCheckOut:'',
    });
    
    const dispatch = useDispatch();
    const { bedrooms } = useSelector((state)=>state.bedrooms);     

    const eachBedroom = bedrooms.map(bedroom=>{
        return {
            key:bedroom.id_h,
            id_h:bedroom.id_h,
            kind_h:bedroom.kind_h,            
        }
    })
    // console.log(eachBedroom);
    
    useEffect(()=>{
        dispatch(getBedroom()) // action que trae todos los bedrooms
    },[dispatch]);


    return(
        <div>
            <form>
                <div>
                <select>
                <option value='' disabled hidden>Elige tu habitación...</option>
                    {eachBedroom.map((bedroom)=>{
                        return(
                            <option key={bedroom.id_h} value={form.kind}>{bedroom.kind_h}</option>
                        )
                    }) 
                    }
                </select>
                </div>

                <div>
                <input type="date" value={form.dateCheckIn} onChange={(e)=>handleChange(e)} name='released'/>                
            </div>
            </form>
        </div>
    )
};

export default FormDisponibilidad;
