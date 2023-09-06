import NavBar from "../components/NavBar/NavBar";
import CardsPlan from "../components/CardsPlan/CardsPlan";
import CardsBedroom from "../components/CardsBedroom/CardsBedroom";
import CardsAmenitie from "../components/CardsAmenitie/CardsAmenitie";
import Banner from "../components/Banner/Banner";
import Footer from "../components/Footer/Footer";
import Loading from "../components/Loading/Loading";
import About from "./AboutUs"
import ButtonBackToTop from "../components/ButtonBackToTop/ButtonBackToTop";
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { getAllBanner } from "../redux/actions/bannerActions";
import { getAllService } from "../redux/actions/serviceActions";

const Landing = ({ isLoggedIn, setIsLoggedIn }) => {
//Banner
    const [banner,setBanner] = useState([]);
    const { banners } = useSelector(state=>state.banner);   
    const dispatch = useDispatch();
    useEffect(()=>{
        dispatch(getAllBanner())                
    },[dispatch])

    useEffect(()=>{
        setBanner(banners)
    },[banners])    
    //console.log(banner);

//CardsAmenitie

const [images,setImages] =useState([]);
const { service } = useSelector(state=>state.service);
useEffect(()=>{
    dispatch(getAllService())
},[dispatch]);

useEffect(()=>{
    setImages(service)
},[service]);


// //CardsPlan
//     const [hoveredCard, setHoveredCard] = useState(null);
//     const handleCardHover = (description) => {
//         setHoveredCard(description);
//     };

//     const handleCardLeave = () => {
//         setHoveredCard(null);
// };

    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setLoading(false);
        }, 2800)
        return () => {
            clearTimeout(timer);
        }
    }, [])

    return (
        <div className="min-h-screen bg-[#585552]">
        {loading ? (
            <Loading />
        ) : (
        <>
            <NavBar isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn}/>
            <Banner banner={banner}/>
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
                        {/* <CardsPlan handleCardHover={handleCardHover} handleCardLeave={handleCardLeave}/> */}
                        <CardsPlan />
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
                    <CardsAmenitie images={images}/>
                </div>

                <About />
            <Footer />
            <ButtonBackToTop /> 
            </>
            )}
    </div>
    );
}

export default Landing;