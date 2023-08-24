import { Link } from 'react-router-dom';

const CardBedroom = ({id_h, gallery, kind_h}) =>{
    return (
                     
        <div className="max-w-[400px]">
            
            <Link to={`/detail/${id_h}`}> 
            <p>{kind_h}</p>
            <img src={gallery} alt={kind_h} className="w-100 h-85"/>
            </Link>
            
            

        </div>
    )
}
export default CardBedroom;