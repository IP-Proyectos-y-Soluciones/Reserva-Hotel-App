import { Link } from 'react-router-dom';
import "tw-elements";

const CardBedroom = ({id_h, gallery, kind_h}) =>{
  
    return (      
           <div>
             <figure class="relative max-w-sm transition-all duration-300 cursor-pointer filter grayscale hover:grayscale-0">
                <a href="#">
                  <img class="rounded-lg" src={gallery} alt={kind_h}/>
                </a>
                  <figcaption class="absolute px-4 text-lg text-white bottom-6">
                    <p>{kind_h}</p>
                  </figcaption>
            </figure>
          </div>
    )
}
export default CardBedroom;