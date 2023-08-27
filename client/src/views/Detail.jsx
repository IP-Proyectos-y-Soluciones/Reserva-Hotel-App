import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import axios from 'axios';
import Album from "../components/album/album";
import Preview1 from '../components/bedroomPreview/preview1';
import FormDisponibilidad from '../components/FormDisponibilidad/FormDisponibilidad';
import Preview2 from '../components/bedroomPreview/preview2';

function Detail() {
  const { id } = useParams();
  const [roomData, setRoomData] = useState({});
  const [roomList, setRoomList] = useState([]);
  const [plans, setPlans] = useState([]);

  useEffect(() => {
    axios.get(`http://localhost:3001/bedroom`)
      .then(response => {
        const roomListData = response.data;
        setRoomList(roomListData);
      })
      .catch(error => {
        console.error('Error fetching room list:', error);
      });

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

    axios.get('http://localhost:3001/plan')
      .then(response => {
        const fetchedPlans = response.data;
        setPlans(fetchedPlans);
      })
      .catch(error => {
        console.error('Error fetching plans:', error);
      });
  }, [id]);

  // Genera un ID diferente para la otra habitación que se mostrará en las vistas previas
  const otherRoomId = "id_de_otra_habitacion"; // Reemplaza con el ID correcto

  return (
    <div className="flex h-screen detail">
      <div className="grid flex-1 gap-4 p-4 auto-rows-min">
        <div className="imagen&type bg-gray-100 p-4">
          <h2 className="">
            {roomList.map(room => (
              <Link className='hover:underline' key={room.id} to={`/detail/${room.id}`}>
                {room.kind_h}{' / '}
              </Link>
             
            ))}
          </h2>
          <div className=""> 
            <Album id={id} />
          </div>
        </div>
        <div className="p-4 bg-gray-200 description">
          <h2>{roomData.description_h}</h2>
        </div>
        <div className="p-4 bg-gray-300 description-of-plan">
          <div className="grid grid-cols-2 gap-4">
            {plans.map(plan => (
              <div key={plan.kind}>
                <h2>{plan.kind}</h2>
                <p>{plan.description}</p>
                <p>Precio alto: {plan.hight_price}</p>
                <p>Precio bajo: {plan.low_price}</p>
              </div>
            ))}
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
      <div className="grid flex-shrink-0 grid-rows-3 gap-4 barra-lateral w-50">
        <div className="p-4 bg-gray-300"><h2><FormDisponibilidad/>  </h2></div>
        <div className="p-4 bg-gray-300"> <Preview1 id={otherRoomId} /></div>
        <div className="p-4 bg-gray-300"><Preview2 id={otherRoomId} /></div>
      </div>
    </div>
  );
}

export default Detail;

