// import { useEffect } from "react";
// import { useSelector, useDispatch } from "react-redux";
// import { useParams } from "react-router-dom";
import Album from "../components/album/album";

function Detail() {
    return (
        <div className="flex h-screen detail">
             <div className="grid flex-1 gap-4 p-4 auto-rows-min">
            <div className="imagen&type bg-gray-100 p-4">
            
               
                <h2 className=""> Caribeña / Colonial / Hindú / Marroquí / Retro </h2>
                <div className="w-full mx-auto md:w-2/3 lg:w-1/2 xl:w-1/3">
                        <Album />
                    </div>
            </div>
            <div className="p-4 bg-gray-200 description">
                <h2> Aquí va la descripción </h2>
                
            </div>
            <div className="p-4 bg-gray-300 description-of-plan">
    <div className="grid grid-cols-2 gap-4">
        <div>
            <h2> Aquí va la descripción de los planes de la habitación </h2>
        </div>
        <div className="w-20 iconos " >
            <img src="imagen-de-iconos-de-servicios" alt="img de servicios" />
            <h2> Aquí está lo que incluye cada plan </h2>
        </div>
    </div>
</div>

            <div className="p-4 bg-yellow-200 tesstimonios">
                <h2> Aquí están los testimonios </h2>
            </div>
        </div>

        <div className="grid grid-rows-3 gap-4 barra-lateral w-50">
            <div className="p-4 bg-gray-300"><h2>cuadro de pre-reserva  </h2></div>
            <div className="p-4 bg-gray-300"><h2>preview 1  </h2></div>
            <div className="p-4 bg-gray-300"><h2>preview 2</h2></div>
        </div>
    </div>
    
    
    );
}

export default Detail; 
