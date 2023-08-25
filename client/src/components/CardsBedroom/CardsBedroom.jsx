import CardBedroom from "../CardBedroom/CardBedroom";
import { getBedroom } from '../../redux/actions/bedroomsActions';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from "react";

const CardsBedroom = () => {

    const dispatch = useDispatch();
    const { bedrooms } = useSelector((state)=>state.bedrooms);     

    const eachBedroom = bedrooms.map(bedroom=>{
        return {
            key:bedroom.id,
            id_h:bedroom.id,
            kind_h:bedroom.kind_h,
            gallery:bedroom.gallery
        }
    })
    // console.log(eachBedroom);
    
    useEffect(()=>{
        dispatch(getBedroom()) // action que trae todos los bedrooms
    },[dispatch]);
                                
    return(
        <div >
            <h1>El confort que mereces</h1>
            <div className="container flex flex-row p-4 mx-auto space-x-4">
            {
                eachBedroom.length > 0 &&  
                eachBedroom.map(bedroom=>{
                    return(
                        <CardBedroom
                        key={bedroom.id_h}
                        id_h={bedroom.id_h}
                        kind_h={bedroom.kind_h}
                        gallery={bedroom.gallery[0]}
                        />
                    )
                })           

                
            }
            </div>

        </div>
    )
};

export default CardsBedroom;