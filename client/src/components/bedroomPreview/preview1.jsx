// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs';
// import { defaults } from 'autoprefixer';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types'

const Preview1 = ({ nextRoomId } ) => {

  const [roomData, setRoomData] = useState({
    imageSrc: '',
    price: '',
  });

  useEffect(() => {
    axios.get(`https://reservas-hotel.onrender.com/bedroom/detail/${nextRoomId}`)
      .then(response => {
        const selectedRoomData = response.data;

        if (selectedRoomData) {
          setRoomData({
            imageSrc: selectedRoomData.gallery[0], // Replace with the actual property name
            price: selectedRoomData.price, // Replace with the actual property name
          });
        }
      })
      .catch(error => {
        console.error('Error fetching room data for Preview1:', error);
      });
  }, [nextRoomId]);

  
    return (
        <div className='preview1'>
        <div className="max-w-[200px]  overflow-hidden">
          <img
            src={roomData.imageSrc}
            alt={"imagen"}
            className="w-full h-auto imagenHabitacion"
          />
        </div>
        <div className='text-center '>
  <div className='text-black bg-yellow-300 rounded-lg '>Detalles resumen</div>
  
  {/* <div className='text-black bg-yellow-300 rounded-lg'>{`Precio: ${roomData.price}`}</div>
  <div className='text-black bg-yellow-300 rounded-lg '>Precio: 550 usd</div> */}
  
  <div className='bg-gray-800 rounded-lg text-gold hover:underline'> <Link to={`/detail/${nextRoomId}`}>ver detalles</Link></div>
</div>

      </div>
      
    );
  };

  Preview1.propTypes = {
    nextRoomId: PropTypes.string.isRequired,
  };
  
  export default Preview1;
  // to={`/detail/${nextRoomId}`}

