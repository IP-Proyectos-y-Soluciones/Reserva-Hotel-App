import React, { useState } from 'react';

const Album = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const images = ['https://upload.wikimedia.org/wikipedia/commons/thumb/7/7d/Japanese_youth_hostel_room.jpg/330px-Japanese_youth_hostel_room.jpg', 'https://images.homify.com/image/upload/c_scale,h_375,w_500/v1439365783/p/photo/image/489918/Depto_DL_kababie_arquitectos_20.jpg']; // Agrega más nombres de imagen si es necesario

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
      <h1>Este es el Album </h1>
      
      <div className="flex items-center justify-center ">
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
