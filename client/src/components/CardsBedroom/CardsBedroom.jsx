// import { useEffect } from "react";
// import { useDispatch, useSelector } from 'react-redux';
// import { getBedroom } from '../../redux/actions/bedroomsActions';
// import CardBedroom from "../CardBedroom/CardBedroom";

// const CardsBedroom = () => {
//   const dispatch = useDispatch();

//   const { bedrooms } = useSelector(state => state.bedrooms);


//   useEffect(() => {
//     dispatch(getBedroom());
//   }, [dispatch]);




//   if (!bedrooms) {
//     return <p>Loading...</p>;
//   }


//   return (
//     <div className="container flex flex-row p-4 mx-auto space-x-4" id="bedroom">
//       {bedrooms && bedrooms.map(bedroom => (
//         <CardBedroom
//           key={bedroom.id}
//           id={bedroom.id}
//           gallery0={bedroom.gallery[0]}
//           kind_h={bedroom.kind_h}
//         />
//       ))}
//     </div>
//   );
// };

// export default CardsBedroom;


import { useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { getAllCategories } from '../../redux/actions/categoriesActions';
import CardBedroom from "../CardBedroom/CardBedroom";

const CardsBedroom = () => {
  const dispatch = useDispatch();

  const { categories } = useSelector(state => state.categories);


  useEffect(() => {
    dispatch(getAllCategories());
  }, [dispatch]);




  if (!categories) {
    return <p>Loading...</p>;
  }


  return (
    <div className="container flex flex-row p-4 mx-auto space-x-4" id="bedroom">
      {categories && categories.map(bedroom => (
        <CardBedroom
          key={bedroom.id}
          id={bedroom.id}
          img={bedroom.img}
          kind={bedroom.kind}
        />
      ))}
    </div>
  );
};

export default CardsBedroom;
