import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import Nav from "../components/navbar/nav";

import React from 'react'; 

function Detail() {
    return (
        <div className="detail">
            <div>
                <Nav/>
            </div>
            <div>
                <h2> Aquí va el componente de apartado y preview de otras habitaciones </h2>
            </div>
            <div className="imagen&type">
                <h2> Caribeña / Colonial / Hindú / Marroquí / Retro </h2>
                <img src="imagen.jpg" alt="imagen habitación" />
            </div>
            <div className="description">
                <h2> Aquí va la descripción </h2>
            </div>
            <div className="description-of-plan">
                <h2> Aquí va la descripción de los planes de la habitación </h2>
                <div>
                    <img src="imagen-de-iconos-de-servicios" alt="img de servicios" />
                    <h2> Aquí está lo que incluye cada plan </h2>
                </div>
            </div>
            <div>
                <h2> Aquí están los testimonios </h2>
            </div>
        </div>
    );
}

export default Detail; 
