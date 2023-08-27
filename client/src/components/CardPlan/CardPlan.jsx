const CardPlan = ({onMouseEnter, onMouseLeave, img, kind}) =>{
    
    return (
                    
        // <div onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>             
        //     <img src={img} alt={kind} className="h-40 w-60" />                
        // </div>


<div>
<figure className="relative max-w-sm transition-all cursor-pointer duration-900" onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
   <a href="#">
     <img className="rounded-lg" src={img} alt={kind}/>
   </a>     
</figure>
</div>
    )
}
export default CardPlan;