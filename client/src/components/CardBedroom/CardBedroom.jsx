import { Link } from 'react-router-dom';
import "tw-elements";



const CardBedroom = ({id, gallery0, gallery1, gallery2, gallery3, gallery4, gallery5, kind_h}) =>{
  
   

    return ( 
      <div>
      <figure className="relative transition-all duration-300 cursor-pointer max-w-fit filter grayscale hover:grayscale-0">
         <a href="#">
           <img className="rounded-lg " src={gallery0} alt={kind_h}/>
         </a>
         <a href="#">
           <img className="rounded-lg " src={gallery1} alt={kind_h}/>
         </a>
         <a href="#">
           <img className="rounded-lg " src={gallery2} alt={kind_h}/>
         </a>
         <a href="#">
           <img className="rounded-lg " src={gallery3} alt={kind_h}/>
         </a>
         <a href="#">
           <img className="rounded-lg " src={gallery4} alt={kind_h}/>
         </a>
         <a href="#">
           <img className="rounded-lg " src={gallery5} alt={kind_h}/>
         </a>
           <figcaption className="absolute px-4 text-lg text-white bottom-6">
        <Link to={`/detail/${id}`}>
             <button 
             type="button" 
             className="text-gray-900 hover:text-white border border-gray-800 hover:bg-gray-900 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:border-gray-600 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-800"
             >Reservar</button>
             </Link>
           </figcaption>
           
     </figure>
   </div>


      

    )
}

export default CardBedroom;