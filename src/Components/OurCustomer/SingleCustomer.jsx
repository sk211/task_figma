import React from 'react'

function SingleCustomer(props) {
  return (
    <div >
        <h4>{props.title}</h4> 
        <img src={props.image} alt="" />
    </div>
  )
}

export default SingleCustomer