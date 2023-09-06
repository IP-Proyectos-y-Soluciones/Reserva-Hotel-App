import PropTypes from 'prop-types'

const CardPlan = ({onMouseEnter, onMouseLeave, description , img, kind}) =>{

    return (        
      <div className='text-white'>
       <h4>{kind}</h4>
          <a href="#">
            <img className="h-40 rounded-lg w-60" src={img} alt={kind}/>
          </a>     
        <h3>{description}</h3>
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