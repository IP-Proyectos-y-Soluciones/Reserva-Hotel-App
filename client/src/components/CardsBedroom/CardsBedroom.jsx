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
    return <p>Loading...</p>;
  }

  return (
    <div className="container flex flex-row p-4 mx-auto space-x-4">
      {bedrooms && bedrooms.map(bedroom => (
        <CardBedroom
          key={bedroom.id}
          id={bedroom.id}
          gallery0={bedroom.gallery[0]}
          gallery1={bedroom.gallery[1]}
          gallery2={bedroom.gallery[2]}
          gallery3={bedroom.gallery[3]}
          gallery4={bedroom.gallery[4]}
          gallery5={bedroom.gallery[5]}
          kind_h={bedroom.kind_h}
        />
      ))}
    </div>
  );
};

export default CardsBedroom;
