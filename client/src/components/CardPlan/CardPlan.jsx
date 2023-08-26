const CardPlan = ({onMouseEnter, onMouseLeave, img, kind}) =>{
    
    return (
                    
        // <div onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>             
        //     <img src={img} alt={kind} className="w-60 h-40" />                
        // </div>


<div>
<figure class="relative max-w-sm transition-all duration-300 cursor-pointer " onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
   <a href="#">
     <img class="rounded-lg" src={img} alt={kind}/>
   </a>     
</figure>
</div>
    )
}
export default CardPlan;