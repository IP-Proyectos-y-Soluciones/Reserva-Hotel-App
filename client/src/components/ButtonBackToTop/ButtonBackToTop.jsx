import { useState, useEffect } from 'react';
import { FiArrowUp } from "react-icons/fi";

const ButtonBackToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleScroll = () => {
    if (window.scrollY > 100) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth', 
    });
  };

  return (
    <>
      {isVisible && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-4 right-4 bg-[#B99768] hover:bg-[#313131] text-white py-2 px-4 rounded-full"
        >
         <FiArrowUp></FiArrowUp>
        </button>
      )}
    </>
  );
};

export default ButtonBackToTop;
