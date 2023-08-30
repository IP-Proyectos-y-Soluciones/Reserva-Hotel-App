import CardPlan from '../CardPlan/CardPlan';
import { getPlans } from '../../redux/actions/plansActions';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from "react";

const CardsPlan = () => {
    const dispatch = useDispatch();
    const { plans } = useSelector((state) => state.plans);


    useEffect(() => {
        dispatch(getPlans());
        console.log(plans)
    }, [dispatch]);


 
    if (!plans) {
        return <p>Loading...</p>;
    }

    return (
        <div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                {plans && plans.map(plan => (
                        <CardPlan
                            key={plan.id}
                            kind={plan.kind}
                            img={plan.img}
                            description={plan.description}
                        />
                        ))}
            </div>
        </div>
    );
};

export default CardsPlan;


