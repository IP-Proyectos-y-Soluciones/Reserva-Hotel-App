const CardPlan = ({onMouseEnter, onMouseLeave, img, kind}) =>{
    
    return (
                    
        // <div onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>             
        //     <img src={img} alt={kind} className="h-40 w-60" />                
        // </div>


<div>
<figure className="relative transition-all duration-300 cursor-pointer" onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
   <a href="#">
     <img className="rounded-lg max-w-1xl" src={img} alt={kind}/>
   </a>     
</figure>
</div>
    )
}
export default CardPlan;