const CardAmenitie = ({id, description, img, kind}) =>{
    return (
                    
        <div>
            
            <p>{kind}</p>
            <img src={img} alt={kind}/>
            

        </div>
    )
}
export default CardAmenitie;