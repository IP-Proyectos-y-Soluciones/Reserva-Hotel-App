import CardPlan from '../CardPlan/CardPlan';
import { getPlans } from '../../redux/actions/plansActions';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from "react";

const CardsPlan = ({ onCardHover, onCardLeave }) => {
    const dispatch = useDispatch();
    const { plans } = useSelector((state) => state.plans);

    useEffect(() => {
        dispatch(getPlans());
    }, []);

    return (
        <div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                {Array.isArray(plans) && plans.length > 0 ? (
                    plans.map((plan) => (
                        <CardPlan
                            key={plan.id}
                            kind={plan.kind}
                            img={plan.img}
                            description={plan.description}
                            onMouseEnter={() => onCardHover(plan.description)}
                            onMouseLeave={onCardLeave}
                        />
                    ))
                ) : (
                    <p>No plans available.</p>
                )}
            </div>
        </div>
    );
};

export default CardsPlan;
