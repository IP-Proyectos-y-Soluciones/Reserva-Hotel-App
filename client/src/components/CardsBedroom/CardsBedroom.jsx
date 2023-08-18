import CardBedroom from "../CardBedroom/CardBedroom";
import single_room from './assets/single_room.jpg';
import double_room from './assets/double_room.jpg';
import premium_loft from './assets/premium_loft.jpg'


const CardsBedroom = () => {

    //harcodeo de prueba hasta tener el redux
    const allBedrooms = [
        {
            id_h: 1 ,
            kind_h: 'Single room' ,
            gallery: single_room,
            description_h: 'Sumérgete en el lujo tropical con nuestra exclusiva habitación individual en el Caribe. Con una cama king-size exquisitamente cómoda, tus sueños encontrarán su refugio. La habitación, amplia y elegante, abarca 40 metros cuadrados de diseño sofisticado, ofreciendo espacio para relajarte. Desde tu ventana panorámica, contempla las aguas turquesas del mar, brindando una vista que calma el alma. Disfruta de la serenidad y el confort en un paraíso donde cada detalle se fusiona con la naturaleza circundante.'
        },
        {
            id_h: 2 ,
            kind_h: 'Double room' ,
            gallery: double_room,
            description_h: 'Sumérgete en el lujo tropical con nuestra amplia habitación doble en el Caribe. Dos camas queen-size, con sábanas de alta calidad, te brindarán el descanso perfecto tras tus aventuras. Con 50 metros cuadrados de elegancia, la habitación ofrece espacio y comodidad. Desde el balcón privado, contempla las aguas turquesas del mar, un cuadro que inspira relajación. Disfruta de la fusión entre diseño exquisito y entorno paradisíaco, donde cada detalle se une para una experiencia inolvidable.'
        },
        {
            id_h: 3 ,
            kind_h: 'Premium loft' ,
            gallery: premium_loft ,
            description_h: 'Descubre el apogeo del lujo caribeño en nuestro premium loft. La habitación se extiende en 70 metros cuadrados de elegancia contemporánea. Una cama king-size con ropa de cama de calidad te espera en el dormitorio loft, mientras que el área de estar ofrece un espacio exquisito para relajarte. Desde el balcón privado, contempla un océano turquesa que se funde con el cielo. Con un comedor bien equipado, experimenta la fusión de comodidad y belleza en un paraíso de diseño impecable.'
        },
    ]

    //se habilita el siguiente código cuando tengamos el redux

    // const dispatch = useDispatch();
    // const bedrooms = useSelector((state)=>state.bedrooms); //  estado global que guarda todos los bedrooms    
    
    // useEffect(()=>{
    //     dispatch(getBedrooms()) // action que trae todos los bedrooms
    // },[]);
                                
    return(
        <div>
            <h1>El confort que mereces</h1>
            {
                allBedrooms.length > 0 &&  //al tener el redux, reemplazamos allBedrooms por bedrooms
                allBedrooms.map(bedroom=>{
                    return (<CardBedroom
                    key={bedroom.id_h}
                    id_h={bedroom.id_h}
                    kind_h={bedroom.kind_h}
                    gallery={bedroom.gallery}                    
                    />)
                })
            }

        </div>
    )
};

export default CardsBedroom;
