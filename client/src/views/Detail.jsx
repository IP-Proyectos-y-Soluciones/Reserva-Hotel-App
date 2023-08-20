// import { useEffect } from "react";
// import { useSelector, useDispatch } from "react-redux";
// import { useParams } from "react-router-dom";

function Detail() {
    return (
        <div className="detail h-screen flex">

        <div className="flex-1 grid grid-rows-4 gap-4 p-4">
            <div className="imagen&type bg-gray-100 p-4">
                <h2 className=""> Caribeña / Colonial / Hindú / Marroquí / Retro </h2>
                <img src="imagen" alt="imagen habitación" className="mx-auto" />
            </div>
            <div className="description bg-gray-200 p-4">
                <h2> Aquí va la descripción </h2>
            </div>
            <div className="description-of-plan bg-gray-300 p-4">
    <div className="grid grid-cols-2 gap-4">
        <div>
            <h2> Aquí va la descripción de los planes de la habitación </h2>
        </div>
        <div className="iconos w-20 " >
            <img src="imagen-de-iconos-de-servicios" alt="img de servicios" />
            <h2> Aquí está lo que incluye cada plan </h2>
        </div>
    </div>
</div>

            <div className="tesstimonios bg-yellow-200 p-4">
                <h2> Aquí están los testimonios </h2>
            </div>
        </div>

        <div className="barra-lateral w-50 grid grid-rows-3 gap-4">
            <div className="p-4 bg-gray-300"><h2>cuadro de pre-reserva  </h2></div>
            <div className="p-4 bg-gray-300"><h2>preview 1  </h2></div>
            <div className="p-4 bg-gray-300"><h2>preview 2</h2></div>
        </div>
    </div>
    
    
    );
}

export default Detail; 
