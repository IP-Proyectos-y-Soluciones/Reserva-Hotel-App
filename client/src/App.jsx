import NavBar from "./components/NavBar/NavBar";
import Landing from "./views/Landing";
import Detail from "./views/Detail";
import Booking from "./components/Booking/Booking";
import { Route, Routes, useLocation } from "react-router-dom";


const App = () => {

  const location = useLocation();

  return (
    <div>
      {
        location.pathname !== "/" && <NavBar />
      }
      <Routes>
        <Route  exact path="/" element={<Landing />} />
        <Route path="/detail/:id" element={<Detail />} />
        <Route path="/booking" element={<Booking />} />
      </Routes>
    </div>
  )
}

export default App;
