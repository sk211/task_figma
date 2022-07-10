import React from 'react'
import SingleCustomer from './SingleCustomer'
import "./OurCustomer.css"

function OurCustomer() {
  return (
    <div className="container mx-auto section_padding">
      <div className="text-center">
     
        <h2 className='hedline_style'>Our Customers</h2>
        <img src="../images/Underline 3 (1).png" alt="" />
           
      </div>
        <div className="display-flex our_Customer">
          <SingleCustomer image={"../images/image 1.png"} />
          <SingleCustomer image={"../images/image 2.png"} />
          <SingleCustomer image={"../images/image 3.png"} />
          <SingleCustomer image={"../images/image 4.png"} />
        </div>
    </div>
  )
}

export default OurCustomer