import React from 'react'

function SingleCustomer(props) {
  return (
    <div className='singleCustomer' >
        <h4 className='singleTitle'>{props.title}</h4> 
        <img src={props.image} alt="" />
    </div>
  )
}

export default SingleCustomer