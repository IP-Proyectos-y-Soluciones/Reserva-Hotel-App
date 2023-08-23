import CardBedroom from "../CardBedroom/CardBedroom";
import { getBedroom } from '../../redux/actions/bedroomsActions';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from "react";

const CardsBedroom = () => {

    const dispatch = useDispatch();
    const { bedrooms } = useSelector((state)=>state.bedrooms);     

    const eachBedroom = bedrooms.map(bedroom=>{
        return {
            key:bedroom.id_h,
            id_h:bedroom.id_h,
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
            <h1 className="bg-white">El confort que mereces</h1>
            <div className="flex p-15 space-x-20 overflow-x-auto">
            {
                eachBedroom.length > 0 &&  
                eachBedroom.map(bedroom=>{
                    return(
                        <CardBedroom className="bg-white"
                        key={bedroom.id_h}
                        id_h={bedroom.id_h}
                        kind_h={bedroom.kind_h}
                        gallery={bedroom.gallery}
                        />
                    )
                })           

                
            }
            </div>

        </div>
    )
};

export default CardsBedroom;