import React from 'react'
import SingleWhatWeDo from './SingleWhatWeDo'
import "./WhatDo.css"

function WhatWeDo() {
  return (
    <div className='container mx-auto py-5'>
      <div className="whatWeDo">
      <h2 className='hedline_style'>What We Do</h2>
        <img src="../images/Underline 3 (1).png" alt="" />
      </div>
        
        <div className="display-flex">
            <SingleWhatWeDo 
            image={"../images/branding 1.png"}
             title={"Branding"}
              li1={"Brand Strategy "}
              li2={"Social media"}
              li3={"Marketing Assets"}
              li4={"Presentations"}
              li5={"Pitch Deck"}
              />
            <SingleWhatWeDo 
            image={"../images/UX.png"}
             title={"UI/UX Design"}
              li1={"User Interface "}
              li2={"User Experience"}
              li3={"Design System"}
              li4={"Wireframe"}
              li5={"Prototype"}
              li6={"Website & Mobile App"}
              li7={"IOS + Android"}
              />
            <SingleWhatWeDo 
            image={"../images/UX.png"}
             title={"Development"}
              li1={"Front End (HTML, CSS, React)"}
              li2={"Backend (Node.js, MongoDB)"}
              li3={"iOS (Swift)"}
              li4={"Android (Kotlin, Flutter)"}
              li5={"Blockchain Development (NFT)"}
              />
        </div>
    </div>
  )
}

export default WhatWeDo