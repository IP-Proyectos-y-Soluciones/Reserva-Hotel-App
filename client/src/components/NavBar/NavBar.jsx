import { Link } from "react-router-dom";


const NavBar = () =>{
    return(
      <div className="bg-blue-500">
      <ul className="flex items-center justify-between"> 
        <div className="flex space-x-4 ">
          <Link to="/">
          <li>Home</li>
          </Link>
          <Link>
          <li>Habitaciones</li>
          </Link>
          <Link>
          <li>Planes</li>
          </Link>
          <Link>
          <li>Servicios</li>
          </Link>
          <Link>
          <li>Contacto</li>
          </Link>
        </div>
        <div className="flex space-x-4 ">
          <div className="flex items-center">
            <li>Reserva</li>
          </div>
          <div className="flex items-center">
            <Link to="/users/login" >
            <li>Login</li>
            </Link>
          </div>
        </div>
      </ul>
    </div>
     
    )
}
export default NavBar;