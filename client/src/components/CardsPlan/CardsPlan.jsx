import CardPlan from '../CardPlan/CardPlan';
import { getPlans } from '../../redux/actions/plansActions';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from "react";

const CardsPlan = () => {
    const dispatch = useDispatch();
    const { plans } = useSelector((state) => state.plans);

<<<<<<< HEAD
   
=======
>>>>>>> 88d811f3e0cbe9df578fbfca14ff5fdd3808570e

    useEffect(() => {
        dispatch(getPlans());
        console.log(plans)
<<<<<<< HEAD
    }, [dispatch, plans]);

    
    const eachPlan = Object.values(plans).map(plan => ({
        key: plan.id,
        kind: plan.kind,
        img: plan.img,
        description: plan.description
     }));

     if (!eachPlan) {
=======
    }, [dispatch]);


 
    if (!plans) {
>>>>>>> 88d811f3e0cbe9df578fbfca14ff5fdd3808570e
        return <p>Loading...</p>;
    }

    return (
        <div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
<<<<<<< HEAD
                {eachPlan && eachPlan.map(plan => (
=======
                {plans && plans.map(plan => (
>>>>>>> 88d811f3e0cbe9df578fbfca14ff5fdd3808570e
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

<<<<<<< HEAD
=======

>>>>>>> 88d811f3e0cbe9df578fbfca14ff5fdd3808570e
