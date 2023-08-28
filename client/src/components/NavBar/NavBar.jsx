import { Link } from "react-router-dom";


const NavBar = () =>{
    return(
      <div className="bg-[#313131] shadow align-middle text-lg  h-9 ">
      <ul className="flex items-center justify-between text-[#B99768] px-3"> 
        <div className="flex space-x-4 font-normal ">
          <Link to="/" className="hover:underline">
          <li> Home</li>
          </Link>
          <Link className="hover:underline" >
          <li>Habitaciones</li>
          </Link>
          <Link className="hover:underline">
          <li>Planes</li>
          </Link>
          <Link className="hover:underline">
          <li>Servicios</li>
          </Link>
          <Link className="hover:underline">
          <li>Contacto</li>
          </Link>
        </div>
        <div className="flex py-px space-x-4">
          <div className="bg-[#B99768] text-white px-4">
          <Link to="/Booking" className="hover:underline">
            <li>Reserva</li>
            </Link>
          </div>
          <div className="px-4 bg-[#B99768] text-white">
            <Link to="/users/login" className="hover:underline">
            <li>Login</li>
            </Link>
          </div>
        </div>
      </ul>
    </div>
     
    )
}
export default NavBar;