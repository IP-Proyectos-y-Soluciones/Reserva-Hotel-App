import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { getUsers, logoutUser} from '../../redux/actions/userActions';
import user from "./assets/user.png"
 
const NavBar = () => {

const dispatch = useDispatch();
const userPhoto = useSelector((state) => state.users.userLogin.userPhoto);
const userId = useSelector((state) => state.users.loggedInUserId);
const login = useSelector((state) => state.users.logged);
const navigate = useNavigate() 
 
  useEffect(() => {
    dispatch(getUsers())
  }, [dispatch])


  const location = useLocation();


  function logout(userId){
    dispatch(logoutUser({ userId })).then(() => {
      navigate("/")
    })

  }
  

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
          {login ? (
  <div>
    {userPhoto ? (
      <Link to="/reservas" className="hover:underline">
        <div>
          <img
            src={`data:image/jpeg;base64,${userPhoto}`}
            alt="User Photo"
            width={40}
            height={10}
            style={{ borderRadius: "70%" }}
          />
          <button onClick={() => logout(userId)}>Log Out</button>
        </div>
      </Link>
    ) : (
      <Link to="/reservas" className="hover:underline">
        <div>
          <img
            src={user}
            alt="Default User Photo"
            width={40}
            height={10}
            style={{ borderRadius: "70%" }}
          />
          <button onClick={() => logout(userId)}>Log Out</button>
        </div>
      </Link>
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