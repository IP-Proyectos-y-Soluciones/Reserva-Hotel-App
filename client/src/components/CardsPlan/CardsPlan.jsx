import CardPlan from "../CardAmenities/CardAmenitie";
import { getPlans } from '../../redux/actions/plansActions';
import { useDispatch, useSelector } from 'react-redux';
import { useState } from "react";

const CardsPlan = () => {
    
    const dispatch = useDispatch();
    const allPlans = useSelector((state)=>state.plans); //  estado global que guarda todos los plans    
    
    useEffect(()=>{
        dispatch(getPlans()) // action que trae todos los plans
    },[]);

    const [hoveredCard, setHoveredCard] = useState(null);

    const handleCardHover = (description) => {
        setHoveredCard(description);
    };

    const handleCardLeave = () => {
        setHoveredCard(null);
    };
                                
    return(
        <div>
            <h1>Descubre la magia del lugar</h1>
            
            {
                allPlans.length > 0 &&  
                allPlans.map(plan=>{
                    return (<CardPlan
                    key={plan.id}
                    kind={plan.kind}
                    img={plan.img}
                    description={plan.description}
                    onMouseEnter={() => handleCardHover(plan.description)}
                    onMouseLeave={handleCardLeave}
                    />)
                })
            }

            {hoveredCard && <div>{hoveredCard}</div>}

        </div>
    )
};

export default CardsPlan;
