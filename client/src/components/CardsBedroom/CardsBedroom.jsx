import React, { useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { getBedroom } from '../../redux/actions/bedroomsActions';
import CardBedroom from "../CardBedroom/CardBedroom";

const CardsBedroom = () => {
    const dispatch = useDispatch();
    
    const { bedrooms } = useSelector(state => state.bedrooms);
    const bedroomsArray = Object.values(bedrooms);

    useEffect(() => {
        dispatch(getBedroom());
        console.log(bedrooms)
    }, [dispatch, bedrooms]);

    if (!bedrooms) {
        return <p>Loading...</p>;
    }

    const eachBedroom = bedroomsArray.map(bedroom => ({
        key: bedroom.id,
        id: bedroom.id,
        kind_h: bedroom.kind_h,
        gallery: bedroom.gallery
    }));

    return (
        <div className="container flex flex-row p-4 mx-auto space-x-4">
    {eachBedroom && eachBedroom.map(bedroom => (
      <CardBedroom
        key={bedroom.id}
        id_h={bedroom.id}
        kind_h={bedroom.kind_h}
        gallery={bedroom.gallery}
      />
    ))}
  </div>
    );
};

export default CardsBedroom;