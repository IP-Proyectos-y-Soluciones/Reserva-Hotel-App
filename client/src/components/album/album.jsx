import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs';


const Album = ({id}) => {
  const [currentIndex,setCurrentIndex] = useState(0);
  const [images, setImages] = useState([]);
  console.log(images);  

  const prevSlide =()=>{
    const isFirstSlide = currentIndex === 0;
    const newIndex= isFirstSlide ? images.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide =()=>{
    const isLastSlide = currentIndex === images.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };


  useEffect(() => {
    // Realiza una solicitud a la API para obtener los datos de la habitación específica
    axios.get(`http://localhost:3001/bedroom/detail/${id}`)
      .then(response => {
        const roomData = response.data;
        const galleryImages = roomData.gallery || [];
        setImages(galleryImages);
      })
      .catch(error => {
        console.error('Error fetching images:', error);
      });
  }, [id]);
  
  return (   
    <div className='max-w-[1400px] h-[780px] w-full m-auto py-16 px-4 relative group'>

    <div style={{ backgroundImage: `url(${images[currentIndex]})` }} className='w-full h-full bg-center bg-cover duration-500'
    ></div>

    <div className='hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer'>
    <BsChevronCompactLeft onClick={prevSlide} size={20}/>
    </div>

    <div className='hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer'>
    <BsChevronCompactRight onClick={nextSlide} size={20}/>
    </div>
   
  </div>
  );
}

export default Album;
