import React, { useState, useEffect } from 'react';
import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs';


const CardsAmenitie = () => {
    const img=[
        "https://res.cloudinary.com/dm9glx5a7/image/upload/v1692802475/PF-HOTEL-APP/Amenities/SPA/1_wbxg5b.jpg",
        "https://res.cloudinary.com/dm9glx5a7/image/upload/v1692802475/PF-HOTEL-APP/Amenities/SPA/2_bwwepk.jpg",
        "https://res.cloudinary.com/dm9glx5a7/image/upload/v1692802474/PF-HOTEL-APP/Amenities/SPA/3_pvfxdx.jpg",
        "https://res.cloudinary.com/dm9glx5a7/image/upload/v1692802509/PF-HOTEL-APP/Amenities/GYM/2_mfhznj.jpg",
        "https://res.cloudinary.com/dm9glx5a7/image/upload/v1692802509/PF-HOTEL-APP/Amenities/GYM/1_w3wclm.jpg",
        "https://res.cloudinary.com/dm9glx5a7/image/upload/v1692802509/PF-HOTEL-APP/Amenities/GYM/3_cyzyfq.jpg",
        "https://res.cloudinary.com/dm9glx5a7/image/upload/v1692802495/PF-HOTEL-APP/Amenities/RESTAURANT/2_dlizcx.jpg",
        "https://res.cloudinary.com/dm9glx5a7/image/upload/v1692802494/PF-HOTEL-APP/Amenities/RESTAURANT/1_rols9q.jpg"

    ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [images, setImages] = useState([]);

  // Usar un efecto para inicializar las imágenes
  useEffect(() => {
    setImages(img);
  }, []);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? images.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === images.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  return (
    <div className='max-w-[1400px] h-[780px] w-full m-auto py-16 px-4 relative group'>
      <div
        style={{ backgroundImage: `url(${images[currentIndex]})` }}
        className='w-full h-full duration-500 bg-center bg-cover rounded-lg'
      ></div>

      <div className='hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-[#B99768] cursor-pointer'>
        <BsChevronCompactLeft onClick={prevSlide} size={20} />
      </div>

      <div className='hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-[#B99768] cursor-pointer'>
        <BsChevronCompactRight onClick={nextSlide} size={20} />
      </div>

      <div className="absolute inset-x-[15%] bottom-1/2 hidden py-5 text-center text-[#B99768] md:block absolute top-1/2 transform -translate-y-1/2">
        <p className="text-3xl">
        Relájate en nuestro spa de clase mundial, mantente activo en nuestro gimnasio de última generación y deleita tus sentidos en nuestro exquisito restaurante, tu escape de ensueño comienza aquí. 
        </p>
      </div>

    </div>
  );
};

export default CardsAmenitie;