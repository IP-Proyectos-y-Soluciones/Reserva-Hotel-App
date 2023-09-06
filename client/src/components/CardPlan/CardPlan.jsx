import PropTypes from 'prop-types'

const CardPlan = ({ description , img, kind }) =>{

    return (        
      <div className='py-4 text-white'>
        <div className='text-2xl font-bold leading-relaxed tracking-wide text-center'>
       <h4>{kind}</h4>
        </div>
          <a>
            <img className="rounded-t-lg w-[150%] h-[40%] border-b-2 border-black" src={img} />
          </a>
          <div className='text-xl leading-relaxed tracking-wide text-center break-words border-b-2 border-white'>
        <h3>{description}</h3>
          </div>
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