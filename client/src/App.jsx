import NavBar from "./components/NavBar/NavBar";
import Landing from "./views/Landing";
import Detail from "./views/Detail";
import Booking from "./components/Booking/Booking";
import Login from "./components/login/Login";
import CardBedroom from "./components/CardBedroom/CardBedroom";
import { Route, Routes, useLocation } from "react-router-dom";
import PageNotFound from "./components/PageNotFound/PageNotFound";


const App = () => {

  const location = useLocation();

  return (
    <div>
      {
        location.pathname !== "/" && <NavBar />
      }
      <Routes>
        <Route  exact path="/" element={<Landing />} />
        <Route path="/bedroom" element={<CardBedroom />} />
        {/* <Route path="/detail/:id" element={<Detail />} /> */}
        <Route path="/booking" element={<Booking />} />
        <Route path="/users/login" element={<Login />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </div>
  )
}

export default App;
