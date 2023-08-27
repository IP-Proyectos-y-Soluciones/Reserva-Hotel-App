// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs';
// import { defaults } from 'autoprefixer';

import { Link } from 'react-router-dom';


const Preview2 = ({ nextRoomId } ) => {
    return (
        <div className='preview1'>
        <div className="max-w-[200px]  overflow-hidden">
          <img
            src={"https://res.cloudinary.com/dm9glx5a7/image/upload/v1692802571/PF-HOTEL-APP/Bedrooms/PREMIUM%20LOFT/5_tlsnv4.jpg"}
            alt={"imagen"}
            className="w-full h-auto imagenHabitacion"
          />
        </div>
        <div className='text-center '>
  <div className='bg-gray-800 rounded-lg text-gold '>Detalles resumen</div>
  <div className='text-black bg-yellow-300 rounded-lg '>precio de la habitacion</div>
  <div className='bg-gray-800 rounded-lg text-gold hover:underline'> <Link  >ver detalles</Link></div>
</div>

      </div>
      
    );
  };
  
  export default Preview2;
  // to={`/detail/${nextRoomId}`}