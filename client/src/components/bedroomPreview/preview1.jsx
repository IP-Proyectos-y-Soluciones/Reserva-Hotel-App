import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs';
import { defaults } from 'autoprefixer';


const Preview1 = ({ id }) => {
    return (
        <div className='preview1'>
        <div className="max-w-[200px] overflow-hidden">
          <img
            src={"https://res.cloudinary.com/dm9glx5a7/image/upload/v1692802571/PF-HOTEL-APP/Bedrooms/PREMIUM%20LOFT/5_tlsnv4.jpg"}
            alt={"imagen"}
            className="w-full h-auto imagenHabitacion"
          />
        </div>
        <div>Detalles resumen</div>
        <div>precio de la habitacion</div>
        <div>ver detalles</div>
      </div>
      
    );
  };
  
  export default Preview1;