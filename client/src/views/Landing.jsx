import NavBar from "../components/NavBar/NavBar";
import CardsPlan from "../components/CardsPlan/CardsPlan";
import CardsBedroom from "../components/CardsBedroom/CardsBedroom";
import CardsAmenitie from "../components/CardsAmenitie/CardsAmenitie";
import Banner from "../components/Banner/Banner";
import Footer from "../components/Footer/Footer";

const Landing = () => {
    return (

        <div className="min-h-screen bg-[#585552]">
            <NavBar />
            
            <Banner/>
            <div>
                <div className="font-semibold leading-10 tracking-widest text-center text-zinc-800">
            <h2 className="text-white">BIENVENIDOS</h2>
            <h3 className="text-3x1">Descubran un refugio de lujo en el corazón de la ciudad. Con elegantes habitaciones, comodidades de primer nivel y un servicio excepcional, estamos aquí para hacer de su estadía una experiencia inolvidable. Desde relajarse en nuestro spa hasta disfrutar de deliciosas opciones gastronómicas, les invitamos a sumergirse en un mundo de tranquilidad y comodidad. ¡Es un placer tenerles aquí!</h3>
                </div>
            </div>

            <div>
                <div >
                    <h1>Descubre la magia del lugar</h1>
                </div>
                    <div className='flex justify-center items-center'>
                        <CardsPlan />
                    </div>
            </div>

            <div>
                <div>
                    <h1>El confort que mereces</h1>
                </div>
                    <div className='flex justify-center items-center'>
                        <CardsBedroom />
                    </div>
            </div>
                
                <div className='flex justify-center items-center'>
                    <CardsAmenitie />
                </div>

            <Footer />

        </div>
    );
}

export default Landing