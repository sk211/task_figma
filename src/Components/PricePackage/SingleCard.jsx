import React from 'react'

function SingleCard(props) {
  return (
    <div>
        <div className="row">
          <div className="card">
            <div className="display-flex">
                <h5>{props.title}</h5>
                <h4>{props.price}</h4>
                </div>
                
                <li><span className="check"><i class="fas fa-check"></i></span>{props.li1}</li>
                <li> <span className="check"><i class="fas fa-check"></i></span>{props.li2}</li>
                <li> <span className="check"><i class="fas fa-check"></i></span>{props.li3}</li>
                <li> <span className="check"><i class="fas fa-check"></i></span>{props.li4}</li>
                <li> <span className="check"><i class="fas fa-check"></i></span>{props.li5}</li>
                <li> <span className="check"><i class="fas fa-check"></i></span>{props.li6}</li>
                <li> <span className="check"><i class="fas fa-check"></i></span>{props.li7}</li>
                <li> <span className="check"><i class="fas fa-check"></i></span>{props.li9}</li>
                <li> <span className="check"><i class="fas fa-check"></i></span>{props.li7}</li>
                <button id="price_button">$899/mo</button>
          </div>
        </div>
    </div>
  )
}

export default SingleCard