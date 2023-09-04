import CardPlan from '../CardPlan/CardPlan';
import { getPlans } from '../../redux/actions/plansActions';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from "react";

const CardsPlan = ({handleCardHover,handleCardLeave}) => {
    const dispatch = useDispatch();
    const { plans } = useSelector((state) => state.plans);


    useEffect(() => {
        dispatch(getPlans());
    }, [dispatch]);


    return (
        <div>
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4" id='plans'>
                {plans && plans.map(plan => (
                        <CardPlan
                            key={plan.id}
                            kind={plan.kind}
                            img={plan.img}
                            description={plan.description}
                            onMouseEnter={() => handleCardHover(plan.description)}
                            onMouseLeave={handleCardLeave}

                        />
                        ))}
            </div>
        </div>
    );
};

export default CardsPlan;

