import React from 'react'

function SingleWhatWeDo(props) {
  return (
    <div className='container mx-auto py-5 singleWhatWeDo'>
      <div className="display-inline">
      <img src={props.image} alt="section image" />
        <h5 className='single_title'>{props.title}</h5>  
      </div>
        <li>{props.li1}</li>
        <li>{props.li2}</li>
        <li>{props.li3}</li>
        <li>{props.li4}</li>
        <li>{props.li5}</li>
        <li>{props.li6}</li>
        <li>{props.li7}</li>

    </div>
  )
}

export default SingleWhatWeDo