import React from 'react'
import SingleCustomer from '../OurCustomer/SingleCustomer'

function OurDevs() {
  return (
    <div className='container mx-auto'>
        <h3>Our Dev Technology</h3>
        <img src="../images/Underline 3 (1).png" alt="" />
        <div className="display-flex">
        <SingleCustomer 
        title="Programming Languages"
        />
        <SingleCustomer 
        title="Frameworks"
        />
        <SingleCustomer 
        title="Databases"
        />
        <SingleCustomer 
        title="Mobile Platforms"
        />
        </div>
        <div className="display-flex">
        <SingleCustomer 
        image="../images/image 5.png"
        />
        <SingleCustomer 
         image="../images/image 6.png"
        />
        <SingleCustomer 
         image="../images/image 7.png"
        />
        <SingleCustomer 
         image="../images/image 8.png"
        />
        <SingleCustomer 
         image="../images/image 9.png"
        />
        </div>
    </div>
  )
}

export default OurDevs