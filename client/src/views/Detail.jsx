import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { getBedroomId, getBedroom } from '../redux/actions/bedroomsActions';
import { getPlans } from '../redux/actions/plansActions';
import { getAllTestimonials } from '../redux/actions/testimonialsActions'; 
import Album from "../components/album/album";
import Preview1 from '../components/bedroomPreview/preview1';
// import FormDisponibilidad from '../components/FormDisponibilidad/FormDisponibilidad';
import Preview2 from '../components/bedroomPreview/preview2';


function Detail() {
  const { id } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getBedroom());
    dispatch(getBedroomId(id));
    dispatch(getPlans());
    dispatch(getAllTestimonials()); 
  }, [dispatch, id]);

  const { bedrooms, bedroomData } = useSelector(state => state.bedrooms);
  const {plans}= useSelector(state=>state.plans);
  const selectedRoomData = bedroomData || bedrooms.find(room => room.id === id) || {};
  const { testimonials } = useSelector(state => state.testimonials);
  const filteredTestimonials = testimonials.filter(testimonial => testimonial.id_room === id && testimonial.approved);

  const otherRoomId = bedrooms.findIndex(room => room.id === id) + 1;
  const nextRoomId = bedrooms[otherRoomId % bedrooms.length]?.id;

  const otherRoomId2 = bedrooms.findIndex(room => room.id === id) + 2;
  const nextRoomId2 = bedrooms[otherRoomId2 % bedrooms.length]?.id;

  
  return (
    <div className="flex h-screen detail"  >
      <div className="grid flex-1 gap-4 p-4 auto-rows-min" >
        <div className="imagen&type bg-gray-100 p-4 ">
          <h2 className="mt-10 font-bold text-center">
            {bedrooms.map(room => (
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
          <h2>{selectedRoomData.description_h}</h2>
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

        <div className="p-4 tesstimonios" style={{ backgroundColor: '#FFE288' }}>
          <h2> Aquí están los testimonios </h2>
          <ul>
                {filteredTestimonials.map(testimonial => (
                  <li key={testimonial.id_testimony}>
                    <p>{testimonial.testimony}</p>
                  </li>
                ))}
              </ul>
        </div>
   </div>
      <div className="grid flex-shrink-0 grid-rows-3 gap-4 barra-lateral w-50">
      <div className="p-4" style={{ backgroundColor: '#585552' }}>
  {/* Botón para redireccionar a la página "/form" */}
  <Link to="/form">
    <button className="px-4 py-2 font-bold text-white bg-blue-500 rounded hover:bg-blue-700 focus:outline-none focus:shadow-outline">
      Agregar experincia 
    </button>
  </Link>
</div
        <div className="p-4"style={{ backgroundColor: '#585552' }}> <Preview1 nextRoomId={nextRoomId} /></div>
        <div className="p-4"style={{ backgroundColor: '#585552' }}><Preview2 nextRoomId={nextRoomId2}  /></div>
      </div>
    </div>
  );
}

export default Detail;





// const getNextRoomId = () => {
//   const currentIndex = roomList.findIndex(room => room.id === id);
//   const nextIndex = (currentIndex + 1) % roomList.length;
//   return roomList[nextIndex].id;
// };

// const otherRoomId = getNextRoomId();
// nextRoomId={otherRoomId}
// FFE288  #313131
