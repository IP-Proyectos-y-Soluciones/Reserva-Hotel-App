import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs';

const Album = ({ id }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [images, setImages] = useState([]);

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

  const prevSlide = () => {
    if (currentSlide > 0) {
      setCurrentSlide(currentSlide - 1);
    }
  };

  const nextSlide = () => {
    if (currentSlide < images.length - 1) {
      setCurrentSlide(currentSlide + 1);
    }
  };

  return (
    <div>
      <h1>Este es el Album</h1>

      <div className="flex items-center justify-center">
  <div className="w-full overflow-hidden bg-white rounded-lg shadow-lg">
    <div className="relative">
      <div id="slider" className="flex">
        {images.map((image, index) => (
          <div
            key={index}
            className={`slide ${index === currentSlide ? 'block' : 'hidden'}`}
            style={{ minWidth: '100%', display: 'flex', justifyContent: 'center' }}
          >
            <img src={image} alt={`Image ${index + 1}`} className="h-auto max-w-full" />
          </div>
        ))}
      </div>
    </div>
  

          <div className="flex items-center justify-center mt-4">
            <div
              className="px-4 py-2 text-white bg-blue-500 rounded-l cursor-pointer hover:bg-blue-600"
              onClick={prevSlide}
            >
              <BsChevronCompactLeft size={20} />
            </div>
            <div
              className="px-4 py-2 text-white bg-blue-500 rounded-r cursor-pointer hover:bg-blue-600"
              onClick={nextSlide}
            >
              <BsChevronCompactRight size={20} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Album;
