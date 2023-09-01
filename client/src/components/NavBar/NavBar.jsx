<<<<<<< HEAD
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { getUsers } from '../../redux/actions/userActions';
=======
import { Link, useLocation } from 'react-router-dom';
>>>>>>> 715f541571d405d29e87d9f5317c9bb057374165

const NavBar = ({ isLoggedIn, setIsLoggedIn }) => {

  const handleLogout = () => {
    setIsLoggedIn(false);
  };
  const dispatch = useDispatch();
  const userPhotos = useSelector(state => state.users);

  //const userCopyPhotos = userPhotos.usersCopy.map(user => user.photo);


  useEffect(() => {
    dispatch(getUsers())
    //console.log(userPhotos)
  }, [dispatch])
  

  const location = useLocation();




  return (
    <div className="bg-[#313131] shadow align-middle text-lg h-9 ">
      <ul className="flex items-center justify-between text-[#B99768] px-3">
        <div className="flex space-x-4 font-normal ">
          <Link to="/" className="hover:underline">
            <li>Home</li>
          </Link>
<<<<<<< HEAD
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
                <li>Reservas</li>
              </Link>
          ) : (
            null
=======
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
>>>>>>> 715f541571d405d29e87d9f5317c9bb057374165
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
