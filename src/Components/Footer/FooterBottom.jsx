import React from 'react'

function FooterBottom() {
  return (
    <div className='container mx-auto'>
      <div className=" display-flex"> 
    
      <div className="col-5">
        <div className="logoFooter">
          <img src="../images/logo-v2 1.png" alt=""  id="footerlogo"/>
          <p>Get a fully stacked design team that will give you accessible design, exhaustive research, and an outstanding experience.</p>
          <p className='footerEmailfooterEmail'>Email: info@softcent.eu</p>
          <p className='footerPhone'>Phone: +(372) 57836500</p>
          <p className='footerIcon'>
            <a href="#"><i class="fab fa-facebook"></i></a>
            <a href="#"><i class="fab fa-whatsapp"></i></a>
            <a href="#"><i class="fab fa-twitter"></i></a>
            <a href="#"><i class="fab fa-instagram"></i></a>
          </p>
          
      </div>
      </div>
      <div className="col-2 footerAreaSection">
        <h3 className='footer_title'>Company</h3>
        <li><a href="#">About us</a></li>
        <li><a href="#">Our portfolio</a></li>
        <li><a href="#">Our Product</a></li>
        <li><a href="#">Our Team</a></li>
        <li><a href="#">Our Priceing</a></li>
        <li><a href="#">Our Priceing</a></li>
        <li><a href="#">Contact Us</a></li>
      </div>
      <div className="col-2 footerAreaSection">
      <h3 className='footer_title'>Our Service</h3>
        <li><a href="#">Marketing</a></li>
        <li><a href="#">UI/UX Design</a></li>
        <li><a href="#">Graphic Design (Branding)</a></li>
        <li><a href="#">Development</a></li>
        <li><a href="#">Our Priceing</a></li>
        <li><a href="#">Our Priceing</a></li>
        <li><a href="#">Contact Us</a></li>
      </div>
      <div className="col-2 footerAreaSection">
      <h3 className='footer_title'>Supports</h3>
        <li><a href="#">FAQs</a></li>
        <li><a href="#">Support Policy</a></li>
        <li><a href="#">Privacy Policy</a></li>
        <li><a href="#">Trams of Service</a></li>
        <li><a href="#">Our Priceing</a></li>
        <li><a href="#">Trams of Service</a></li>
      </div>
    </div>
    <hr />
      <div className="row">
        <div className="text-center footerBottom">
          <p>© 2022, Softcent EU, A European IT company</p>
        </div>
      </div>
    </div>
  )
}

export default FooterBottom