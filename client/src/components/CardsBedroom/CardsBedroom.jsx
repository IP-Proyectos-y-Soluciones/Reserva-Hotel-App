import CardBedroom from "../CardBedroom/CardBedroom";
import { getBedroom } from '../../redux/actions/bedroomsActions';
import { useDispatch, useSelector } from 'react-redux';

const CardsBedroom = () => {

    const dispatch = useDispatch();
    const allBedrooms = useSelector((state)=>state.bedrooms); //  estado global que guarda todos los bedrooms   
    
    useEffect(()=>{
        dispatch(getBedroom()) // action que trae todos los bedrooms
    },[]);
                                
    return(
        <div>
            <h1>El confort que mereces</h1>
            {
                allBedrooms.length > 0 &&  //al tener el redux, reemplazamos allBedrooms por bedrooms
                allBedrooms.map(bedroom=>{
                    return (<CardBedroom
                    key={bedroom.id_h}
                    id_h={bedroom.id_h}
                    kind_h={bedroom.kind_h}
                    gallery={bedroom.gallery[0]}                    
                    />)
                })
            }

        </div>
    )
};

export default CardsBedroom;