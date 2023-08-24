import NavBar from "../components/NavBar/NavBar";
import CardsPlan from "../components/CardsPlan/CardsPlan";
import CardsBedroom from "../components/CardsBedroom/CardsBedroom";
// import CardsAmeneties from "../components/CardsAmenitie/CardsAmenitie";
import Banner from "../components/Banner/Banner";
import Footer from "../components/Footer/Footer";

const Landing = () => {
    return (
        <div className="min-h-screen bg-gray-100">
            <NavBar />
            <Banner/>
            {/* <h5 className="py-2 text-center text-white bg-red-500">Banner</h5> */}
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
            <Footer/>
        </div>
    )
}

export default Landing