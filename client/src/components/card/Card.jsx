import React from "react";

const Card = () =>{
    return (
        <div >
            <div>{bedrooms.name}</div>
            <p>Sumérgete en el lujo y la serenidad en nuestra espectacular Habitación de Lujo con Vista al Mar, ubicada en nuestro exclusivo hotel en el corazón del Caribe. Diseñada para brindar una experiencia inolvidable, esta habitación te llevará a un mundo de confort y elegancia mientras disfrutas de las vistas impresionantes del mar turquesa y las playas de arena blanca.</p>
            <div>{bedrooms.price}</div>
            <Link to="/booking"> 
            <button onClick={RESEÑA} > RESERVAR</button>
            </Link>

        </div>
    )
}
export default Card;