import React from 'react'
import SingleCustomer from '../OurCustomer/SingleCustomer'
import "./OurDevs.css"

function OurDevs() {
  const styles={
    borderBottom:"2px solid blue"
  }
  return (
    <div className='container mx-auto' id="OurDevs">
      <div className="text-center devsh2">
      <h2 className='hedline_style text-center'>Our Dev Technology</h2>
        <img src="../images/Underline 3 (1).png" alt="" />
      </div>
       
        <div className="display-flex ">
          <div className='OurTitle2'>
          <SingleCustomer 
        title="Programming " 
        />
          </div>
          <div className='OurTitle'>
          <SingleCustomer 
        title=" Languages" 
        />
          </div>
        
          <div className='OurTitle'>
          <SingleCustomer 
        title="Frameworks"
        />
          </div>
        
      <div className='OurTitle'>
        <SingleCustomer 
        title="Databases"
        />
        </div>
        <div className='OurTitle'>
        <SingleCustomer 
        title="Mobile Platforms"
        />
        </div>
        </div>
        <div className="display-flex ourDevImage">
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