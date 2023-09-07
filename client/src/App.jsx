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
import CardsReservasNuevo from "../src/components/CardReservas/CardsReservasNuevo";
import axios from "axios";
import CardPlan from "./components/CardPlan/CardPlan";
import Success from './components/Booking/Success';

import TestimonialForm from './views/TestimonialForm';


axios.defaults.baseURL = 'https://reservas-hotel.onrender.com';

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const location = useLocation();

  return (
    <div>
      {location.pathname !== '/' && <NavBar isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />}
      <Routes>
        <Route exact path="/" element={<Landing isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />} />
        <Route path="/bedroom" element={<CardBedroom />} />

        <Route path="/detail/:id" element={<Detail />} />

        <Route path="/plan" element={<CardPlan />} />
        <Route path="/form" element={<TestimonialForm />} />
        <Route path="/reservas" element={<CardsReservasNuevo />} />
        <Route path="/booking" element={<Booking />} />
        <Route path="/users/login" element={<Login setIsLoggedIn={setIsLoggedIn} />} />
        <Route path="/registrar" element={<Registar setIsLoggedIn={setIsLoggedIn} />} />
        <Route path="/verification" element={<Verification />} />
        <Route path="/success" element={<Success />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </div>
  );
};


export default App;


