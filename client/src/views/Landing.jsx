import NavBar from "../components/NavBar/NavBar";
import CardsPlan from "../components/CardsPlan/CardsPlan";
import CardsBedroom from "../components/CardsBedroom/CardsBedroom";
// import CardsAmeneties from "../components/CardsAmenitie/CardsAmenitie";
import Banner from "../components/Banner/Banner";
import Footer from "../components/Footer/Footer";

const Landing = () => {
    return (
        <div className="min-h-screen bg-zinc-800">
            <NavBar />
            <h1 className="bg-white">Estilo y distinción</h1>
            <Banner />
            <h2 className="bg-white">BIENVENIDOS</h2>
            <h3 className="bg-white">Descubran un refugio de lujo en el corazón de la ciudad. Con elegantes habitaciones, comodidades de primer nivel y un servicio excepcional, estamos aquí para hacer de su estadía una experiencia inolvidable. Desde relajarse en nuestro spa hasta disfrutar de deliciosas opciones gastronómicas, les invitamos a sumergirse en un mundo de tranquilidad y comodidad. ¡Es un placer tenerles aquí!</h3>
            <div className="container flex flex-row p-4 mx-auto space-x-4">
                <div className="flex-grow">
                    <CardsPlan />
                </div>
                <div className="flex-grow">
                    <CardsBedroom />
                </div>
                {/* <div className="flex-grow">
                    <CardsAmenities />
                </div> */}
            </div>
            <Footer />
        </div>
    )
}

export default Landing