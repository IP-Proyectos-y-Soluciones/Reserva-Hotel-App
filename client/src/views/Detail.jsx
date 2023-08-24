import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import Album from "../components/album/album";

function Detail() {
  const { id } = useParams();
  const [roomData, setRoomData] = useState({});
  const [plans, setPlans] = useState([]); // State for plans

  useEffect(() => {
    axios.get(`http://localhost:3001/bedroom/detail/${id}`)
      .then(response => {
        const selectedRoomData = response.data;

        if (selectedRoomData) {
          setRoomData(selectedRoomData);
        } else {
          console.error(`No se encontraron datos para la habitación con ID: ${id}`);
        }
      })
      .catch(error => {
        console.error('Error fetching room data:', error);
      });

    // Fetch plans from the API
    axios.get('http://localhost:3001/plan')
      .then(response => {
        const fetchedPlans = response.data;
        setPlans(fetchedPlans);
      })
      .catch(error => {
        console.error('Error fetching plans:', error);
      });
  }, [id]);

  return (
    <div className="flex h-screen detail">
      <div className="grid flex-1 gap-4 p-4 auto-rows-min">
        <div className="imagen&type bg-gray-100 p-4">
          <h2 className=""> Caribeña / Colonial / Hindú / Marroquí / Retro </h2>
          <div className="w-full mx-auto md:w-2/3 lg:w-1/2 xl:w-1/3">
            <Album id={id} /> {/* Cambio a minúscula: { id } */}
          </div>
        </div>
        <div className="p-4 bg-gray-200 description">
        <h2>{roomData.description_h}</h2>
        </div>
        <div className="p-4 bg-gray-300 description-of-plan">
          <div className="grid grid-cols-2 gap-4">
          <div>
              {plans.map(plan => (
                <div key={plan.kind}>
                  <h2>{plan.kind}</h2>
                  <p>{plan.description}</p>
                  <p>Precio alto: {plan.hight_price}</p>
                  <p>Precio bajo: {plan.low_price}</p>
                </div>
              ))}
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
