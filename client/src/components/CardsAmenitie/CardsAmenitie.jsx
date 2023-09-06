// Import React and other necessary libraries
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs';
import { getAllService } from '../../redux/actions/serviceActions';


const CardsAmenitie = ({ images }) => {

  const [slides, setSlides] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };
  
  useEffect(() => {
    if (images.length > 0) {
      setSlides(images);
    }
  }, [images]);

  if (slides.length === 0) {
    return <div>No hay servicios disponibles.</div>;
  }

  return (
    <div className='max-w-[1400px] h-[780px] w-full m-auto py-16 px-4 relative group' id='ameneties'>
      <div
        style={{ backgroundImage: `url(${slides[currentIndex].photo_small})` }}
        className='w-full h-full bg-center bg-cover rounded-lg '
      ></div>

      <div className='hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-[#B99768] cursor-pointer'>
        <BsChevronCompactLeft onClick={prevSlide} size={20} />
      </div>

      <div className='hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-[#B99768] cursor-pointer'>
        <BsChevronCompactRight onClick={nextSlide} size={20} />
      </div>

      <div className="absolute inset-x-[15%] bottom-1/2 hidden py-5 text-center tracking-widest md:block top-1/2 transform -translate-y-1/2 text-black">
        <p className="text-4xl font-semibold transition-opacity duration-500 cursor-auto group-hover:opacity-0">
          Relájate en nuestro spa de clase mundial, mantente activo en nuestro gimnasio de última generación y deleita tus sentidos en nuestro exquisito restaurante, tu escape de ensueño comienza aquí.
        </p>
      </div>
    </div>
  );
};

export default CardsAmenitie;
