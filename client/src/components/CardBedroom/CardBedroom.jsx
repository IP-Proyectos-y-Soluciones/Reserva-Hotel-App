import { Link } from 'react-router-dom';

const CardBedroom = ({id_h, gallery, kind_h}) =>{
    return (
                    
        <div>
            
            <Link to={`/detail/${id_h}`}> 
            <p>{kind_h}</p>
            <img src={gallery} alt={kind_h}/>
            </Link>

        </div>
    )
}
export default CardBedroom;