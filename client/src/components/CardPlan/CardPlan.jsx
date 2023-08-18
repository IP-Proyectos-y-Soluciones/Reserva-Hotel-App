const CardPlan = ({description, img, kind}) =>{
    //falta mostrar la descripcion cuando el cursor pasa por encima de una card
    return (
                    
        <div>
            
            
            <p>{kind}</p>
            <img src={img} alt={kind}/>
            

        </div>
    )
}
export default CardPlan;