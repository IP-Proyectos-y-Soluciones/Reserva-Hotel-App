

const NavBar = () =>{
    return(
        <div className= "bg-blue-500" >
          <ul>
          <div className="flex space-x-4 parte1 1">
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
          <div className="flex flex-row-reverse w-6/4">
            <div className="flex-row-reverse p-4">
            <li >
              Reserva
            </li>
            </div>
            <div className="p-4">
            <li>
              Login
            </li>
            </div>
          </div>
          </ul>
        </div>
    )
}
export default NavBar;