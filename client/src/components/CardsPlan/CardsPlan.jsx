import CardPlan from "../CardAmenities/CardAmenitie";
import catamaran from './assets/catamaran.png';
import plan_aventura from './assets/plan_aventura.png';
import plan_romantico from './assets/plan_romantico.png';
import plan_luna_de_miel from './assets/plan_luna_de_miel.png';

const CardsPlan = () => {

    //harcodeo de prueba hasta tener el redux
    const allPlans = [
        {
            id: 1 ,
            kind: 'Un día en catamarán' ,
            img: catamaran,
            description: 'Embárcate en una aventura inolvidable en el Caribe con nuestro emocionante paseo en catamarán. Sumérgete en las aguas turquesas del mar Caribe mientras navegamos todo el día. Descubre playas escondidas, practica snorkel en arrecifes vibrantes y relájate bajo el sol caribeño. ¡Reserva ahora y vive el paraíso en alta mar!'
        },
        {
            id: 2 ,
            kind: 'Plan aventura' ,
            img: plan_aventura,
            description: 'Descubre un emocionante plan de aventura en el Caribe que combina kayak, paddle surf y adrenalina en moto de agua. Navega las aguas cristalinas, explora la costa en kayak, deslízate en paddle surf y siente la velocidad en moto de agua. ¡Vive la emoción caribeña al máximo!'
        },
        {
            id: 3 ,
            kind: 'Plan romántico' ,
            img: plan_romantico ,
            description: 'Sumérgete en un plan romántico sin igual en el Caribe. Disfruta de una cena excepcional que deleitará tus sentidos mientras el sol se pone sobre las aguas turquesas. Ambiente íntimo, exquisita gastronomía y vistas espectaculares se combinan para crear una velada inolvidable. Celebra el amor en el escenario perfecto.'
        },
        {
            id: 4 ,
            kind: 'Plan luna de miel' ,
            img: plan_luna_de_miel ,
            description: 'Celebra el amor en un plan de luna de miel inolvidable en el Caribe. Disfruta de días bañados por el sol en la playa, aventuras acuáticas emocionantes y cenas románticas frente al mar. Nuestra propuesta cuidadosamente diseñada te brinda el escenario perfecto para crear recuerdos imborrables juntos. ¡Comienza tu viaje de vida en pareja en el paraíso caribeño!'
        },
    ]

    //se habilita el siguiente código cuando tengamos el redux

    // const dispatch = useDispatch();
    // const plans = useSelector((state)=>state.plans); //  estado global que guarda todos los plans    
    
    // useEffect(()=>{
    //     dispatch(getPlans)) // action que trae todos los plans
    // },[]);
                                
    return(
        <div>
            <h1>Descubre la magia del lugar</h1>
            {
                allPlans.length > 0 &&  //al tener el redux, reemplazamos allPlans por plans
                allPlans.map(plan=>{
                    return (<CardPlan
                    key={plan.id}
                    kind={plan.kind}
                    img={plan.img}
                    description={plan.description}
                    />)
                })
            }

        </div>
    )
};

export default CardsPlan;
