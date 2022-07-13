import React from 'react'
import SingleCard from './SingleCard'
import "./PricePackages.css"

function PricePackages(props) {

 
  return (
    <div className='container mx-auto PricePackage'>
        <div className="row clear_both text-center">
        
        <h2 className='hedline_style'>Pricing Package Choose Your Plan</h2>
        <img src="../images/Underline 3 (1).png" alt="" />

        <p className='price_paragraph'>We believe that great design should not be out of reach, so our services are less than half the price of a full-time designer.</p>
        <div className="packing_button">
        <button id="button1">Monthly</button>
        <button id="button2">Yearly</button>
            
        </div>
       
        </div>
        <div className="row">
            <div className="display-flex">
         <SingleCard 
         title={"Markeing "}
         price={"$ 899"}
         li1={"Dedicated Designer"}
         li2={"Unlimited requests"}
         li3={"Unlimited brand profiles"}
         li4={"Native source files"}
         li5={"Real-time collaboration"}
         li6={"Banner Ads"}
         li7={"Clothing & Merchandise Design"}
         li8={"Packaging & Label"}
         li9={"Logo & Brand Guide"}

        
         />
         <div  id="secondCard">
       
         <SingleCard 
         title={"UI/UX Design "}
         price={"$1000/ mo"}
         li1={"Dedicated Designer"}
         li2={"Unlimited requests"}
         li3={"Unlimited brand profiles"}
         li4={"Native source files"}
         li5={"Real-time collaboration"}
         li6={"Banner Ads"}
         li7={"Clothing & Merchandise Design"}
         li8={"Packaging & Label"}
         li9={"Logo & Brand Guide"}
         />
            
            </div>
         <SingleCard 
         title={"Development "}
         price={"$1000/ mo"}
         li1={"Dedicated Designer"}
         li2={"Unlimited requests"}
         li3={"Unlimited brand profiles"}
         li4={"Native source files"}
         li5={"Real-time collaboration"}
         li6={"Banner Ads"}
         li7={"Clothing & Merchandise Design"}
         li8={"Packaging & Label"}
         li9={"Logo & Brand Guide"}
         />
        </div>
        </div>

    </div>
  )
}

export default PricePackages