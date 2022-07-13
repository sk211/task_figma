import React from 'react'
import "./WorkFlow.css"

function WorkFlow() {
  return (
    <div className='  WorkFlow'>
        <div className="container mx-auto py-5">

       
        <div className="text-center workFlowTop">
            <h2 className='hedline_style text-center'>Workflow</h2>
        <img src="../images/Underline 3 (1).png" alt="" />
        </div>

    
        <div className=" display-flex">
            <div className='col-6 workFlowLi'>
                <div className="workFlow_Acodding">
                <li>1.Defining Goal</li>
                <p>Project analysis, defining project requirements and objectives based on clients needs, cost and effort estimation, creating value and process planning.</p>
                </div>
                <li>2.Product Design</li>
                <li>3.Development</li>
                <li>4.Development</li>
                <li>5.Product Release</li>
                <li>6.Maintenance Support</li>
        
            </div>
          
            <div className='col-6'>
                <img src="../images/ux-indonesia-qC2n6RQU4Vw-unsplash 1.png" alt=""   />
            </div>
        </div>
        </div>
        
    </div>
  )
}

export default WorkFlow