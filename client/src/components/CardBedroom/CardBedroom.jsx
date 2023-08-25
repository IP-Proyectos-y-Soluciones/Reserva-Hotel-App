import { Link } from 'react-router-dom';
import "tw-elements";

const CardBedroom = ({id_h, gallery, kind_h}) =>{
  
    return (      
        <div
        class="relative max-w-xs overflow-hidden bg-cover bg-no-repeat"
        data-te-ripple-init
        data-te-ripple-color="light">
            <Link to={`/detail/${id_h}`}> 
            
        <img
          src={gallery}
          class="max-w-xs"
          alt={kind_h} />
        <a href="#!">
          <div
            class="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-[hsl(0,0%,98.4%,0.2)] bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100"></div>
        </a>
      {/* <div className="absolute top-0 right-0 bottom-0 left-0 h-full w-full overflow-hidden bg-fixed">
                  <div className="flex h-full items-end justify-start">
                    <h5 className="m-6 text-lg font-bold text-white">{kind_h}</h5>
                  </div>
                </div> */}
        </Link> 
      </div>
      

       
    )
}
export default CardBedroom;