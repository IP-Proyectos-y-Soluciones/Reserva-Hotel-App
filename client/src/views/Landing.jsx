import NavBar from "../components/NavBar/NavBar";
import CardsPlan from "../components/CardPlan/CardPlan";
import CardsBedroom from "../components/CardsBedroom/CardsBedroom";
// import CardsAmeneties from "../components/CardsAmenitie/CardsAmenitie";

const Landing = () => {
    return (
        <div>
            <NavBar />
            <h5 className="bg-red-500">Banner</h5>
            <CardsPlan />
            <CardsBedroom />
            {/* <CardsAmeneties /> */}
        </div>
    )
}

export default Landing