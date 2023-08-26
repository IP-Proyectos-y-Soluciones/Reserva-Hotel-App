const CardPlan = ({onMouseEnter, onMouseLeave, img, kind}) =>{
    
    return (
                    
        <div onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>             
            <img src={img} alt={kind} className="w-60 h-40" />                
        </div>
    )
}
export default CardPlan;