import React from 'react'
import SingleCustomer from '../OurCustomer/SingleCustomer'
import "./OurDesign.css"

function OurDesing() {
  return (
    <div className='container mx-auto OurDesingSection'>
      <div className="text-center ourDesign">
      <h2 className='hedline_style text-center'> Our Design Technology</h2>
        <img src="../images/Underline 3 (1).png" alt="" />
      </div>
      
        <div className="display-flex desing_image">
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