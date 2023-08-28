import CardPlan from '../CardPlan/CardPlan';
import { getPlans } from '../../redux/actions/plansActions';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from "react";

const CardsPlan = ({ onCardHover, onCardLeave }) => {
    const dispatch = useDispatch();
    const { plans } = useSelector((state) => state.plans); // estado global que guarda todos los plans
    const eachPlan = plans.map((plan) => {
        return {
            key: plan.id,
            kind: plan.kind,
            img: plan.img,
            description: plan.description
        };
    });

    useEffect(() => {
        dispatch(getPlans()); // action que trae todos los plans
    }, []);

    return (
        <div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                {eachPlan.length > 0 &&
                    eachPlan.map((plan) => {
                        return (
                            <CardPlan
                                key={plan.id}
                                kind={plan.kind}
                                img={plan.img}
                                description={plan.description}
                                onMouseEnter={() => onCardHover(plan.description)}
                                onMouseLeave={onCardLeave}
                            />
                        );
                    })}
            </div>
        </div>
    );
};

export default CardsPlan;


