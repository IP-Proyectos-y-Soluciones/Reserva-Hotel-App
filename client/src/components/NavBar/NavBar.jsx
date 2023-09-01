import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

const NavBar = ({ isLoggedIn, setIsLoggedIn }) => {

  const handleLogout = () => {
    setIsLoggedIn(false);
  };





  return (
    <div className="bg-[#313131] shadow align-middle text-lg h-9 ">
      <ul className="flex items-center justify-between text-[#B99768] px-3">
        <div className="flex space-x-4 font-normal ">
          <Link to="/" className="hover:underline">
            <li>Home</li>
          </Link>
          <Link to="/habitaciones" className="hover:underline">
            <li>Habitaciones</li>
          </Link>
          <Link to="/planes" className="hover:underline">
            <li>Planes</li>
          </Link>
          <Link to="/servicios" className="hover:underline">
            <li>Servicios</li>
          </Link>
          <Link to="/contacto" className="hover:underline">
            <li>Contacto</li>
          </Link>
          {isLoggedIn ? (
            <Link to="/reservas" className="hover:underline">
            <li>Mis Reservas</li>
            </Link>
          ) : (
           null
          )}
        </div>
        <div className="flex py-px space-x-4">
          <div className="bg-[#B99768] text-white px-4">
            <Link to="/Booking" className="hover:underline">
              <li>Reserva</li>
            </Link>
          </div>
          {isLoggedIn ? (
            <div className="px-4 bg-[#B99768] text-white">
              <img src={userPerfil} alt="Profile" />
              <button onClick={handleLogout}>Logout</button>
            </div>
          ) : (
            <div className="px-4 bg-[#B99768] text-white">
              <Link to="/users/login" className="hover:underline">
                <li>Login</li>
              </Link>
            </div>
          )}
        </div>
      </ul>
    </div>
  );
};

export default NavBar;
