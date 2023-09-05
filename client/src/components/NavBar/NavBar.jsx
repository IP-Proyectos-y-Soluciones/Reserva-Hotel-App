import { Link, useLocation } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { getUsers } from '../../redux/actions/userActions';
import user from "./assets/user.png"
 
const NavBar = ({ isLoggedIn }) => {

  const dispatch = useDispatch();
  const userPhotos = useSelector(state => state.users);

  const userCopyPhotos = userPhotos.usersCopy.map(user => user.photo);
   const foto = userCopyPhotos[0]

  useEffect(() => {
    dispatch(getUsers())
    console.log(userCopyPhotos)
  }, [dispatch])
  

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
           <div>
           {foto ? (
             <Link to="/reservas" className="hover:underline">
               <img
                 src={`data:image/jpeg;base64,${foto}`}
                 alt="User Photo"
                 width={40}
                 height={10}
                 style={{ borderRadius: "70%" }}
               />
             </Link>
           ) : (
             <div>
               <img
                 src={user}
                 alt="Default User Photo"
                 width={40}
                 height={10}
                 style={{ borderRadius: "70%" }}
               />
             </div>
           )}
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