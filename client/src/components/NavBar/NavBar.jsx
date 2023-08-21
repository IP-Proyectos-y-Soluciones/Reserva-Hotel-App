

const NavBar = () =>{
    return(
      <div className="bg-blue-500">
      <ul className="flex items-center justify-between"> 
        <div className="flex space-x-4 ">
          <li>Habitaciones</li>
          <li>Planes</li>
          <li>Servicios</li>
          <li>Contacto</li>
        </div>
        <div className="flex space-x-4 ">
          <div className="flex items-center">
            <li>Reserva</li>
          </div>
          <div className="flex items-center">
            <li>Login</li>
          </div>
        </div>
      </ul>
    </div>
     
    )
}
export default NavBar;