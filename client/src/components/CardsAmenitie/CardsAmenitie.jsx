import { useState, useEffect } from 'react';
import { BsChevronCompactLeft, BsChevronCompactRight, BsDiscFill } from 'react-icons/bs';
import { getAllService } from '../../redux/actions/serviceActions';
import { useDispatch, useSelector } from 'react-redux';


const CardsAmenitie = ({images}) => {

  const [slides,setSlides]=useState([]);
 // console.log(slides);
  

// const img=[
//         "https://res.cloudinary.com/dm9glx5a7/image/upload/v1692802475/PF-HOTEL-APP/Amenities/SPA/1_wbxg5b.jpg",
//         "https://res.cloudinary.com/dm9glx5a7/image/upload/v1692802475/PF-HOTEL-APP/Amenities/SPA/2_bwwepk.jpg",
//         "https://res.cloudinary.com/dm9glx5a7/image/upload/v1692802474/PF-HOTEL-APP/Amenities/SPA/3_pvfxdx.jpg",
//         "https://res.cloudinary.com/dm9glx5a7/image/upload/v1692802509/PF-HOTEL-APP/Amenities/GYM/2_mfhznj.jpg",
//         "https://res.cloudinary.com/dm9glx5a7/image/upload/v1692802509/PF-HOTEL-APP/Amenities/GYM/1_w3wclm.jpg",
//         "https://res.cloudinary.com/dm9glx5a7/image/upload/v1692802509/PF-HOTEL-APP/Amenities/GYM/3_cyzyfq.jpg",
//         "https://res.cloudinary.com/dm9glx5a7/image/upload/v1692802495/PF-HOTEL-APP/Amenities/RESTAURANT/2_dlizcx.jpg",
//         "https://res.cloudinary.com/dm9glx5a7/image/upload/v1692802494/PF-HOTEL-APP/Amenities/RESTAURANT/1_rols9q.jpg"

//     ];

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
      setSlides(images)     
    }
  }, [images]);

  if (slides.length === 0) {
    
    return <div>No hay servicios disponibles.</div>;
  }

  return (
    <div className='max-w-[1400px] h-[780px] w-full m-auto py-16 px-4 relative group' id='ameneties'>
      <div
        style={{ backgroundImage: `url(${slides[currentIndex].photo_small})` }}
        className='w-full h-full duration-500 bg-center bg-cover rounded-lg hover:blur-none blur cursor-cell'
      ></div>

      <div className='hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-[#B99768] cursor-pointer'>
        <BsChevronCompactLeft onClick={prevSlide} size={20} />
      </div>

      <div className='hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-[#B99768] cursor-pointer'>
        <BsChevronCompactRight onClick={nextSlide} size={20} />
      </div>

      <div className="absolute inset-x-[15%] bottom-1/2 hidden py-5 text-center text-white tracking-widest md:block absolute top-1/2 transform -translate-y-1/2">
        <p className="text-4xl font-semibold transition-opacity duration-500 cursor-auto group-hover:opacity-0">
        Relájate en nuestro spa de clase mundial, mantente activo en nuestro gimnasio de última generación y deleita tus sentidos en nuestro exquisito restaurante, tu escape de ensueño comienza aquí. 
        </p>
      </div>

    </div>
  );
};

export default CardsAmenitie;