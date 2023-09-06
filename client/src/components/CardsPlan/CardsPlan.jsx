import CardPlan from '../CardPlan/CardPlan';
import { getPlans } from '../../redux/actions/plansActions';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from "react";

const CardsPlan = () => {
    const dispatch = useDispatch();
    const { plans } = useSelector((state) => state.plans);


    useEffect(() => {
        dispatch(getPlans());
    }, [dispatch]);


    return (
        <div className='block'>
            <div className="px-5 py-11 text-left text-[#B99768] text-4xl tracking-widest font-semibold shadow-lg">
                <h1>Descubre la magia del lugar</h1>
            </div>
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4" id='plans'>
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

