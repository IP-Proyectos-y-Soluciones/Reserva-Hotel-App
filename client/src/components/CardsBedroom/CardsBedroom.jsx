import React, { useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { getBedroom } from '../../redux/actions/bedroomsActions';
import CardBedroom from "../CardBedroom/CardBedroom";

const CardsBedroom = () => {
    const dispatch = useDispatch();
    const { bedrooms } = useSelector(state => state.bedrooms);

    useEffect(() => {
        dispatch(getBedroom());
    }, [dispatch]);

    if (!bedrooms) {
        return <p>Loading...</p>; // Veriler yüklenene kadar yükleme mesajı göster
    }

    const eachBedroom = bedrooms.map(bedroom => ({
        key: bedroom.id,
        id_h: bedroom.id,
        kind_h: bedroom.kind_h,
        gallery: bedroom.gallery
    }));

    return (
        <div className="container flex flex-row p-4 mx-auto space-x-4">
            {eachBedroom.map(bedroom => (
                <CardBedroom
                    key={bedroom.id_h}
                    id_h={bedroom.id_h}
                    kind_h={bedroom.kind_h}
                    gallery={bedroom.gallery}
                />
            ))}
        </div>
    );
};



export default CardsBedroom;
