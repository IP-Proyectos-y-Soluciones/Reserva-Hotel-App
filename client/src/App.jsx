import { useState } from 'react';
import NavBar from "./components/NavBar/NavBar";
import Landing from "./views/Landing";
import Detail from "./views/Detail";
import Booking from "./components/Booking/Booking";
import Login from "./components/login/Login";
import CardBedroom from "./components/CardBedroom/CardBedroom";
import { Route, Routes, useLocation } from "react-router-dom";
import PageNotFound from "./components/PageNotFound/PageNotFound";
import Registar from "./components/login/registrar";
import Verification from "./components/login/verificando";
import ReservasCards from "./components/reservasCards/CardsR"
import axios from "axios";



import CardPlan from "./components/CardPlan/CardPlan";

// axios.defaults.baseURL = 'http://localhost:3001/';
axios.defaults.baseURL = 'https://reservas-hotel.onrender.com';

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const location = useLocation();

  return (
    <div>
        {
        location.pathname !== "/" && <NavBar isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
      }
      <Routes>
      <Route exact path="/" element={<Landing isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />} />
        <Route path="/bedroom" element={<CardBedroom />} />

        <Route path="/detail/:id" element={<Detail />} />

        <Route path="/plan" element={<CardPlan />} />
        {/* <Route path="/detail/:id" element={<Detail />} /> */}
        <Route path="/reservas" element={<ReservasCards />} />
        <Route path="/booking" element={<Booking />} />
        <Route path="/users/login" element={<Login setIsLoggedIn={setIsLoggedIn} />} />
        <Route path="/registrar" element={<Registar setIsLoggedIn={setIsLoggedIn} />} />
        <Route path="/verification" element={<Verification/>} />
        <Route path="*" element={<PageNotFound />} />
       
      </Routes>
    </div>
    
    
  )
}

export default App;