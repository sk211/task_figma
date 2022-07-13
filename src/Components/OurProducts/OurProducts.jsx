import React from 'react'
import "./OurProducts.css"

function OurProducts() {
  return (

    <div className='ourProduct_section' id="Our_ProductSection">
        <div className=" ">
 
        <div className="OurProductTop container mx-auto">
          <h2 className='hedline_style'>Our  Products</h2>
        <img src="../images/Underline 3 (1).png" alt="" />
        </div>
        <div className="display-flex hedlineSection container mx-auto">
            <p className='para_style'>We believe that great design should not be out of reach, so our services are less than half the price of a full-time designer.</p>
            <div>
                <button className=''>See More</button>
            </div>
        </div>
        <div className="row display-flex">
            <div className=" col-6 padding-left">
                <div className='product_para'>
                <h2 className='product_style'>SwipeXYZ Product</h2>
                <p className='product_paragraph'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                <button>View products</button>
                </div>
            </div>
            <div className='col-6'>
                <img src="../images/Mockup 1.png" alt="" width="100%" />
            </div>
        </div>
   
    
        <div className="row display-flex">
        <div className='display-flex col-6 '>
        <img src="../images/Mockup 1.png" alt="" width="100%" />

            </div>
            <div className="display-flex col-6 ">
                <div className='product_para padding-left '>
                <h2 className='product_style'>Cashback Product</h2>
                <p className='product_paragraph'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                <button >View products</button>
                </div>
            </div>
                       
        </div>
        </div>
    </div>
  )
}

export default OurProducts