import React, { useState, useEffect } from 'react';
import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs';

const Banner = () => {  
  const slides = [
    {
      url: 'https://res.cloudinary.com/dm9glx5a7/image/upload/v1692147833/PF-HOTEL-APP/HALL/3_gubg3f.jpg'
    },
    {
      url: 'https://res.cloudinary.com/dm9glx5a7/image/upload/v1692147833/PF-HOTEL-APP/HALL/2_tg4jxp.jpg'
    },
    {
      url: 'https://res.cloudinary.com/dm9glx5a7/image/upload/v1692147833/PF-HOTEL-APP/HALL/1_pxxkn1.jpg'
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    const newIndex = (currentIndex - 1 + slides.length) % slides.length;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const newIndex = (currentIndex + 1) % slides.length;
    setCurrentIndex(newIndex);
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 5000); 

    return () => {
      clearInterval(interval);
    };
  }, [currentIndex]);

  return (
    <div className='max-w-[1400px] h-[780px] w-full m-auto py-16 px-4 relative group'>
      <div style={{ backgroundImage: `url(${slides[currentIndex].url})` }} className='w-full h-full bg-center bg-cover duration-500'></div>

      
      <div className="absolute inset-x-[15%] bottom-1/2 hidden py-5 text-center text-yellow-500 md:block absolute top-1/2 transform -translate-y-1/2">
        <h5 className="text-5xl">Estilo y Distinción</h5>
        <p className="text-2xl">
          Hotel PF 
        </p>
      </div>
    </div>
  );
};

export default Banner;
