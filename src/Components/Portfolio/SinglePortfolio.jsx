import React from 'react'

function SinglePortfolio(props) {
  return (
    <div>
        <img src={props.image} alt="" />
        <h5 className='singlePortfolio'>{props.title}</h5>

    </div>
  )
}

export default SinglePortfolio