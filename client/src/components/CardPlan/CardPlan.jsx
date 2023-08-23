const CardPlan = ({onMouseEnter, onMouseLeave, img, kind}) =>{
    
    return (
                    
        <div onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave} className="max-w-[400px]">             
            
            <p>{kind}</p>
            <img src={img} alt={kind} className="w-100 h-85"/>                

        </div>
    )
}
export default CardPlan;