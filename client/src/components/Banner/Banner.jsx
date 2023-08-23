import imgHall1 from '../../assets/hall/1.jpg';
import imgHall2 from '../../assets/hall/2.jpg';
import imgHall3 from '../../assets/hall/3.jpg';

//descomentar etiquetas <img/> para hacer el carrusel 

const Banner = () => {
    return(
        <div>

            <h1>Estilo y distinción</h1>

            {/* <img src={imgHall1} alt='Ingreso al hotel'/> */}
            <img src={imgHall2} alt='Ingreso al hotel'/>
            {/* <img src={imgHall3} alt='Ingreso al hotel'/> */}

            <h2>BIENVENIDOS</h2>
            <h3>Descubran un refugio de lujo en el corazón del Caribe. Con elegantes habitaciones, comodidades de primer nivel y un servicio excepcional, estamos aquí para hacer de su estadía una experiencia inolvidable. Desde relajarse en nuestro spa hasta disfrutar de deliciosas opciones gastronómicas, les invitamos a sumergirse en un mundo de tranquilidad y comodidad. ¡Es un placer tenerles aquí!</h3>

        </div>
    )
};

export default Banner;