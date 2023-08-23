const CardPlan = ({onMouseEnter, onMouseLeave, img, kind}) =>{
    
    return (
                    
        <div onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>             
            
            <p>{kind}</p>
            <img src={img} alt={kind}/>                

        </div>
    )
}
export default CardPlan;