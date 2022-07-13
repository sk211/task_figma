import React from 'react'
import SinglePortfolio from './SinglePortfolio'
import "./Protflio.css"

function Portfolio() {
  return (
    <div className='container mx-auto'>
      <div className="portfolioTop">
      <h2 className='hedline_style'>Our Portfolio</h2>
        <img src="../images/Underline 3 (1).png" alt=""  id="portfolio_img"/>
      </div>
      
        <div className="display-flex">
            <SinglePortfolio 
            image={"../images/Colory Cover 1.png"} 
            title={"Color System Design"}
            />
            <SinglePortfolio 
            image={"../images/Colory Cover 1 (1).png"} 
            title={"Color System Design"}
            />
            <SinglePortfolio 
            image={"../images/Mockup 1.png"} 
            title={"Color System Design"}
            />
        </div>
        <div className="text-center py-5">

        <button id="portfolio_btn">See all Protpolio</button>
        </div>

    </div>
  )
}

export default Portfolio