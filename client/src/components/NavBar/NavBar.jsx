import { Link } from "react-router-dom";


const NavBar = () =>{
    return(
      <div className="bg-[#313131] shadow align-middle" >
      <ul className="flex items-center justify-between text-[#B99768]"> 
        <div className="flex space-x-4 font-normal">
          <Link to="/">
          <li> Home</li>
          </Link>
          <Link>
          <li> Habitaciones</li>
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
          <div className="bg-[#B99768] text-white px-4">
            <li>Reserva</li>
          </div>
          <div className="px-4 bg-[#B99768] text-white">
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