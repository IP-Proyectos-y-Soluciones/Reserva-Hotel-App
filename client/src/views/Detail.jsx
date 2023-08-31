import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams, Link } from 'react-router-dom';
import Album from "../components/album/album";
import Preview1 from '../components/bedroomPreview/preview1';
import Preview2 from '../components/bedroomPreview/preview2';
import FormDisponibilidad from '../components/FormDisponibilidad/FormDisponibilidad';
import { getBedroom } from '../redux/actions/bedroomsActions'; // Importa tu acción de Redux

function Detail() {
  const dispatch = useDispatch();
  const { id } = useParams();
  const roomList = useSelector(state => state.bedrooms.bedrooms); // Obtiene los datos de las habitaciones del estado
  const roomData = useSelector(state => state.bedrooms.bedrooms.find(room => room.id === id)) || {};

  useEffect(() => {
    dispatch(getBedroom()); // Dispara la acción para obtener los datos de las habitaciones
  }, [dispatch]);

  const getNextRoomId = () => {
    const currentIndex = roomList.findIndex(room => room.id === id);
    const nextIndex = (currentIndex + 1) % roomList.length;
    return roomList[nextIndex].id;
  };

  const getNextRoomId2 = () => {
    const currentIndex = roomList.findIndex(room => room.id === id);
    const nextIndex = (currentIndex + 2) % roomList.length;
    return roomList[nextIndex].id;
  };

  const otherRoomId = getNextRoomId();
  const otherRoomId2 = getNextRoomId2();

  return (
    <div className="flex h-screen detail">
      <div className="grid flex-1 gap-4 p-4 auto-rows-min">
        <div className="imagen&type bg-gray-100 p-4">
          <h2>
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
            {/* Renderiza los planes aquí */}
          </div>
        </div>
        <div className="p-4 bg-yellow-200 tesstimonios">
          <h2> Aquí están los testimonios </h2>
        </div>
      </div>
      <div className="grid flex-shrink-0 grid-rows-3 gap-4 barra-lateral w-50">
        <div className="p-4 bg-gray-300"><h2><FormDisponibilidad/>  </h2></div>
        <div className="p-4 bg-gray-300"> <Preview1 nextRoomId={otherRoomId} /></div>
        <div className="p-4 bg-gray-300"><Preview2 nextRoomId={otherRoomId2}  /></div>
      </div>
    </div>
  );
}

export default Detail;
