

const NavBar = () =>{
    return(
        <div className= "bg-blue-500" >
          <ul>
          <div className="flex-row">
            <li>
            habitaciones
            </li>
            <li>
              Planes
            </li>
            <li>
              Servicios
            </li>
            <li>
              Contacto
            </li>
          </div>
          <div className="flex-row-reverse">
            <li>
              Reserva
            </li>
            <li>
              Login
            </li>
          </div>
          </ul>
        </div>
    )
}
export default NavBar;