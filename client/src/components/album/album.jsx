import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Album = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [images, setImages] = useState([]);

  useEffect(() => {
    // Realiza una solicitud a la API para obtener los datos de las habitaciones
    axios.get('http://localhost:3001/bedroom')
      .then(response => {
        const bedrooms = response.data;
        const galleryImages = bedrooms[0].gallery || []; // Suponiendo que solo obtendrás el primer registro
        setImages(galleryImages);
      })
      .catch(error => {
        console.error('Error fetching images:', error);
      });
  }, []);

  const showSlide = (index) => {
    setCurrentSlide(index);
  };

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
        <div className="w-full overflow-hidden bg-white rounded-lg shadow-lg md:w-2/3 lg:w-1/2 xl:w-1/3">
          <div className="relative">
            <div id="slider" className="flex">
              {images.map((image, index) => (
                <div key={index} className={`slide ${index === currentSlide ? 'block' : 'hidden'}`}>
                  <img src={image} alt={`Image ${index + 1}`} className="w-full h-auto" />
                </div>
              ))}
            </div>
          </div>
          
          <div className="flex items-center justify-center mt-4">
            <button onClick={prevSlide} className="px-4 py-2 text-white bg-blue-500 rounded-l hover:bg-blue-600">
              Previous
            </button>
            <button onClick={nextSlide} className="px-4 py-2 text-white bg-blue-500 rounded-r hover:bg-blue-600">
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Album;
