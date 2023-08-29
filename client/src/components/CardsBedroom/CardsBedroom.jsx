import React, { useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { getBedroom } from '../../redux/actions/bedroomsActions';
import CardBedroom from "../CardBedroom/CardBedroom";

const CardsBedroom = () => {
    const dispatch = useDispatch();
    const { bedrooms } = useSelector(state => state.bedrooms);

    useEffect(() => {
        dispatch(getBedroom());
        console.log(bedrooms)
    }, [dispatch, bedrooms]);


       const eachBedroom = Object.values(bedrooms).map(bedroom => ({
         key: bedroom.id,
         id: bedroom.id,
         kind_h: bedroom.kind_h,
         gallery: bedroom.gallery
      }));

      if (!eachBedroom) {
        return <p>Loading...</p>;
    }
    return (
        <div className="container flex flex-row p-4 mx-auto space-x-4">
    {eachBedroom && eachBedroom.map(bedroom => (
      <CardBedroom
        key={bedroom.id}
        id={bedroom.id}
        kind_h={bedroom.kind_h}
        gallery={bedroom.gallery}
      />
    ))}
  </div>
    );
};

export default CardsBedroom;
