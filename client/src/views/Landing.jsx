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
            <Banner />
            <h2>BIENVENIDOS</h2>
            <h3>Descubran un refugio de lujo en el corazón de la ciudad...</h3>
                <div className="container flex flex-row p-4 mx-auto space-x-4">
                    <CardsPlan />
                </div >
                <div className='flex items-center justify-center'>
                    <CardsBedroom />
                </div>
                <div className="container flex flex-row p-4 mx-auto space-x-4">
                    <CardsAmenitie />
                </div>
            <Footer />
        </div>
    );
}

export default Landing