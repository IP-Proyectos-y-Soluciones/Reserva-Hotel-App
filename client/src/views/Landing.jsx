import NavBar from "../components/NavBar/NavBar";
import CardsPlan from "../components/CardsPlan/CardsPlan";
import CardsBedroom from "../components/CardsBedroom/CardsBedroom";
import CardsAmenitie from "../components/CardsAmenitie/CardsAmenitie";
import Banner from "../components/Banner/Banner";
import Footer from "../components/Footer/Footer";
import ButtonBackToTop from "../components/ButtonBackToTop/ButtonBackToTop";
// import Filtros from "../components/Filtros/Filtros";
import { useState } from 'react';

const Landing = ({ isLoggedIn, setIsLoggedIn }) => {
    
    const [hoveredCard, setHoveredCard] = useState(null);

    const handleCardHover = (description) => {
        setHoveredCard(description);
    };

    const handleCardLeave = () => {
        setHoveredCard(null);
    };

    return (
        <div className="min-h-screen bg-[#585552]">
            <NavBar isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn}/>
            
            <Banner/>
             {/* <div><Filtros></Filtros> </div>  */}
                <div className="leading-10 tracking-widest text-center shadow-lg">
                <div className="py-2 text-4xl font-semibold tracking-widest font">
                    <h2 className="text-[#B99768]">BIENVENIDOS</h2>
                </div>
                <div className="py-4 mx-3 my-2 text-3xl font-light leading-10 tracking-wider">
                    <h3 className="text-white">Descubran un refugio de lujo en el corazón de la ciudad. Con elegantes habitaciones, comodidades de primer nivel y un servicio excepcional, estamos aquí para hacer de su estadía una experiencia inolvidable. Desde relajarse en nuestro spa hasta disfrutar de deliciosas opciones gastronómicas, les invitamos a sumergirse en un mundo de tranquilidad y comodidad. ¡Es un placer tenerles aquí!</h3>
                </div>
                </div>
            <div>
                <div className="px-5 text-left text-[#B99768] text-4xl tracking-widest font-semibold shadow-lgg">
                    <h1>Descubre la magia del lugar</h1>
                </div>
                    <div className='flex items-center justify-center'>
                        <CardsPlan onCardHover={handleCardHover} onCardLeave={handleCardLeave} />
                    </div>
            </div>

            <div>
                <div className="text-4xl font-semibold tracking-widest text-right text-[#B99768] px-5">
                    <h1>El confort que mereces</h1>
                </div>
                    <div className='flex items-center justify-center'>
                        <CardsBedroom />
                    </div>
            </div>
                
                <div className='flex items-center justify-center'>
                    <CardsAmenitie />
                </div>

            <Footer />
            <ButtonBackToTop />
            {hoveredCard && (
        <div className="fixed bottom-0 left-0 right-0 p-4 text-center bg-white">
          <p className="text-black">{hoveredCard}</p>
        </div>
      )}

    
            
        </div>

    
    

        
    );

}

export default Landing;