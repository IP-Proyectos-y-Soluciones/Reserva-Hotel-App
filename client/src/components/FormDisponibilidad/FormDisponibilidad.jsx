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
        <div className='flex items-center justify-center'>
            <form onSubmit={(e) => handleSubmit(e)}>
                <div>
                <select id='kind' defaultValue='' data-te-select-init>
                <option value='' disabled hidden>Tipo de habitación</option>
                    {eachBedroom.map((bedroom)=>{
                        return(
                            <option key={bedroom.id_h} value={form.kind}>{bedroom.kind_h}</option>
                        )
                    }) 
                    }
                </select>
                </div>

                <div>
                    <div className="relative mb-3" data-te-datepicker-init data-te-input-wrapper-init>
                      <input type="date" className="peer block min-h-[auto] w-full rounded border-0 bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 dark:peer-focus:text-primary"/>
                    </div>

                    <div className="relative mb-3" data-te-datepicker-init data-te-input-wrapper-init>
                        <input type="date" className="peer block min-h-[auto] w-full rounded border-0 bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 dark:peer-focus:text-primary"/>
                    </div>

</div>
                {/* <div>
                    <label>Entrada</label>
                    <input type="date" value={form.dateCheckIn} title='Entrada'/>    
                    <label>Salida</label>
                    <input type="date" value={form.dateCheckIn} title='Salida'/>                
                </div> */}

                <button
  type="submit"
  className="inline-block rounded bg-[#313131] px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]">
  Ver disponibilidad
</button>
            </form>
        </div>
    )
};

export default FormDisponibilidad;
