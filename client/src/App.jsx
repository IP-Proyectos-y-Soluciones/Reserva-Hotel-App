import { useState } from 'react';
import NavBar from "./components/NavBar/NavBar";
import Landing from "./views/Landing";

import Detail from "./views/Detail";

// import Detail from "./views/Detail";

import Booking from "./components/Booking/Booking";
 import Login from "./components/login/Login";
import CardBedroom from "./components/CardBedroom/CardBedroom";
import { Route, Routes, useLocation } from "react-router-dom";
import PageNotFound from "./components/PageNotFound/PageNotFound";
import Registar from "./components/login/registrar";
import Verification from "./components/login/verificando";
import axios from "axios";


<<<<<<< HEAD
=======

import CardPlan from "./components/CardPlan/CardPlan";

>>>>>>> 6e6f06565398f50335ebf5a5e6a406223c9e0939
axios.defaults.baseURL = 'http://localhost:3001/';

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

        <Route path="/booking" element={<Booking />} />
        <Route path="/users/login" element={<Login setIsLoggedIn={setIsLoggedIn} />} />
        <Route path="/registrar" element={<Registar/>} />
        <Route path="/verification" element={<Verification/>} />
        <Route path="*" element={<PageNotFound />} />
       
      </Routes>
    </div>
    
    
  )
}

export default App;