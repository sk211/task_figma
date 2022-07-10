import React from 'react'
import SinglePortfolio from './SinglePortfolio'

function Portfolio() {
  return (
    <div className='container mx-auto'>
        <h2>Our Portfolio</h2>
        <img src="../images/Underline 3 (1).png" alt="" />
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

        <button>See all Protpolio</button>
        </div>

    </div>
  )
}

export default Portfolio