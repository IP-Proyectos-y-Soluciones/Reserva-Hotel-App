import { useState } from 'react';
import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs';



const Banner = () => {  

  const slides =[
    {url:'https://res.cloudinary.com/dm9glx5a7/image/upload/v1692147833/PF-HOTEL-APP/HALL/3_gubg3f.jpg'
  },
    {url:'https://res.cloudinary.com/dm9glx5a7/image/upload/v1692147833/PF-HOTEL-APP/HALL/2_tg4jxp.jpg'
  },
    {url:'https://res.cloudinary.com/dm9glx5a7/image/upload/v1692147833/PF-HOTEL-APP/HALL/1_pxxkn1.jpg'
  }
  ];

  const [currentIndex,setCurrentIndex] = useState(2);

  const prevSlide =()=>{
    const isFirstSlide = currentIndex === 0;
    const newIndex= isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide =()=>{
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  

  return (
  
  <div className='max-w-[1400px] h-[780px] w-full m-auto py-16 px-4 relative group'>

    <div style={{backgroundImage:`url(${slides[currentIndex].url})`}}className='w-full h-full bg-center bg-cover duration-500'
    ></div>

    <div className='hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer'>
    <BsChevronCompactLeft onClick={prevSlide} size={38}/>
    </div>

    <div className='hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer'>
    <BsChevronCompactRight onClick={nextSlide} size={38}/>
    </div>
  </div>) 

    
  
};

export default Banner;