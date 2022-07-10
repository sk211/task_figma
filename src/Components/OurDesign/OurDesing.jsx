import React from 'react'
import SingleCustomer from '../OurCustomer/SingleCustomer'

function OurDesing() {
  return (
    <div className='container mx-auto'>
        <h2> Our Design Technology</h2>
        <img src="../images/Underline 3 (1).png" alt="" />
        <div className="display-flex">
        <SingleCustomer 
        image="../images/image 5 (1).png"
        />
        <SingleCustomer 
         image="../images/image 6 (1).png"
        />
        <SingleCustomer 
         image="../images/image 7 (1).png"
        />
        <SingleCustomer 
         image="../images/image 8 (1).png"
        />
        <SingleCustomer 
         image="../images/image 9 (1).png"
        />
        </div>
    </div>
  )
}

export default OurDesing