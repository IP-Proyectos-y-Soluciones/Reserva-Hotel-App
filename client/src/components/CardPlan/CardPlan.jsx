import PropTypes from 'prop-types'

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

  CardPlan.propTypes = {
    onMouseEnter: PropTypes.func.isRequired,
    onMouseLeave: PropTypes.func.isRequired,
    img: PropTypes.string.isRequired,
    kind: PropTypes.string.isRequired,
  };


export default CardPlan;