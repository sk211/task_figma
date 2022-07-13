import React from 'react'
import "./About.css"

function About() {
  return (
    <div className='container mx-auto about' id="about">
        <div className="text-center aboutTop">
        <h2 className='hedline_style'>Talk About Us!</h2>
        <img src="../images/Underline 3 (1).png" alt="" />
        </div>
       <div className="row">
        <div className="display-flex about_section2">
        <div className='col-6'>
        <p id='about_para'><i class="fas fa-quote-left fa-2x"></i>
          We had a bit of a slow and bumpy start, but after changing the designer on their side everything went in a very good direction. The designers were talented and easy to work with.<i class="fas fa-quote-right fa-2x"></i></p>
        <div className="display-inline">
            <div>
            <img src="../images/Ellipse 5.png" alt=""  />
            </div>
            <div className="name">
            <h4>Shuvo Roy</h4>
            <p>Softcent Co-Founder</p>
            </div>
        </div>
       </div>
       <div  className='about_image col-6'>
        <img src="../images/Ellipse 6.png" alt="" />
       </div>
                 
       </div>
       </div>

        
    </div>
  )
}

export default About