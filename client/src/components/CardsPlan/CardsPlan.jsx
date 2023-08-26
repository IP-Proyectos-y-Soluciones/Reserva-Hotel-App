import CardPlan from '../CardPlan/CardPlan';
import { getPlans } from '../../redux/actions/plansActions';
import { useDispatch, useSelector } from 'react-redux';
import { useState,useEffect } from "react";

const CardsPlan = () => {
    
    const dispatch = useDispatch();
    const { plans } = useSelector((state)=>state.plans);   //  estado global que guarda todos los plans    
    const eachPlan = plans.map(plan=>{
        return {
            key:plan.id,
            kind:plan.kind,
            img:plan.img,
            description:plan.description
        }
    })
    
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
        <div >
            
            
            <div>
            {hoveredCard && <div>{hoveredCard}</div>}
            </div>

            <div className="container flex flex-row p-6 mx-auto space-x-7">
            {
                eachPlan.length > 0 &&  
                eachPlan.map(plan=>{
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

            
            </div>
            

        </div>
    )
};

export default CardsPlan;
