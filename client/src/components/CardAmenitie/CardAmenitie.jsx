const CardAmenitie = ({description, img, kind}) =>{
    return (
                    
        <div>
            
            <p>{kind}</p>
            <img src={img} alt={kind} className="w-100 h-85"/>
            

        </div>
    )
}
export default CardAmenitie;