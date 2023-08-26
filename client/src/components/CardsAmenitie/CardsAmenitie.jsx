import CardAmenitie from '../CardAmenitie/CardAmenitie';
import gym from './assets/gym.jpg';
import spa from './assets/spa.jpg';
import restaurant from './assets/restaurant.jpg';

const CardsAmenitie = () => {

    //harcodeo de prueba hasta tener el redux
    const allAmenities = [
        {
            id: 1 ,
            kind: 'Gym' ,
            img: gym,
            description: 'Nuestro gimnasio en el Caribe es un santuario de bienestar y vitalidad. Las máquinas de ejercicio de última generación te esperan para una experiencia de entrenamiento excepcional. Con un enfoque en la comodidad, las áreas de estiramiento y descanso están diseñadas pensando en tu confort. Cada detalle, desde la iluminación hasta los equipos ergonómicos, está destinado a brindarte un ambiente inspirador para alcanzar tus metas de fitness. Descubre un espacio donde tu energía se eleva y tu bienestar florece.'
        },
        {
            id: 2 ,
            kind: 'Spa' ,
            img: spa,
            description: 'Nuestro spa en el Caribe es un oasis de serenidad y rejuvenecimiento. Sumérgete en la relajación suprema en una cama de tratamiento especialmente diseñada para tu confort. Cada detalle, desde la suavidad de las sábanas hasta la iluminación tenue, está cuidadosamente pensado para brindarte una experiencia sensorial única. Déjate llevar por las manos expertas de nuestros terapeutas y sumérgete en un mundo de tranquilidad y renovación.'
        },
        {
            id: 3 ,
            kind: 'Restaurant' ,
            img: restaurant ,
            description: 'Nuestro restaurante en el Caribe es un deleite culinario en un entorno paradisíaco. Las mesas elegantemente dispuestas te invitan a saborear platos exquisitos con vistas al mar. La atención meticulosa al detalle se refleja en cada aspecto, desde la presentación artística de los platos hasta la calidez del servicio. Sumérgete en una experiencia gastronómica inolvidable, donde la frescura de los ingredientes se combina con un ambiente sofisticado para despertar todos tus sentidos.'
        },        
    ]

    //se habilita el siguiente código cuando tengamos el redux

    // const dispatch = useDispatch();
    // const amenities = useSelector((state)=>state.amenities); //  estado global que guarda todos los bedrooms    
    
    // useEffect(()=>{
    //     dispatch(getAmenities()) // action que trae todos los amenities
    // },[]);
                                
    return(
        <div>
            <h1>Hacemos la diferencia</h1>
            <div className="flex p-15 space-x-20 overflow-x-auto">
            {
                allAmenities.length > 0 &&  //al tener el redux, reemplazamos allAmenities por amenitie
                allAmenities.map(amenitie=>{
                    return (<CardAmenitie
                    key={amenitie.id}
                    id={amenitie.id}
                    kind={amenitie.kind}
                    img={amenitie.img}
                    description={amenitie.description}
                    />)
                })
            }
            </div>
        </div>
    )
};

export default CardsAmenitie;
