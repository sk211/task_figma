import React from 'react'
import "./About.css"

function About() {
  return (
    <div className='container mx-auto about' id="about">
        <div className="text-center">
        <h2 className='hedline_style'>Talk About Us!</h2>
        <img src="../images/Underline 3 (1).png" alt="" />
        </div>
       <div className="row">
        <div className="display-flex about_section2">
        <div className='col-6'>
        <p id='about_para'>We had a bit of a slow and bumpy start, but after changing the designer on their side everything went in a very good direction. The designers were talented and easy to work with.</p>
        <div className="display-inline">
            <div className=''>
            <img src="../images/Ellipse 5.png" alt=""  />
            </div>
            <div className="name">
            <h4>Shuvo Roy</h4>
            <p>Softcent Co-Founder</p>
            </div>
        </div>
       </div>
       <div >
        <img src="../images/Ellipse 6.png" alt="" />
       </div>
                 
       </div>
       </div>

        
    </div>
  )
}

export default About