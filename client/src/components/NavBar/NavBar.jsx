import { Link, useLocation } from 'react-router-dom';

const NavBar = ({ isLoggedIn, setIsLoggedIn }) => {

  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  const location = useLocation();




  return (
    <div className="bg-[#313131] shadow align-middle text-lg h-9 ">
      <ul className="flex items-center justify-between text-[#B99768] px-3">
        <div className="flex space-x-4 font-normal ">
          <Link to="/" className="hover:underline">
            <li>Home</li>
          </Link>
          { location.pathname === '/' && (
          <>
            <li className="hover:underline">
            <a href='#plans'>Planes</a>
            </li>
            <li className="hover:underline">
            <a href='#bedroom'>Habitaciones</a>
            </li>
            <li className="hover:underline">
            <a href='#ameneties'>Servicios</a>
            </li>
            <li className="hover:underline">
            <a href='#footer'>Contacto</a>
            </li>
          </>
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
