import React from 'react'
import "./Card.scss"

const WomenCard  = ({title,img,description}) => { 
  return (
    <div className='women'>
    <div className='container'>

        <div className='content' >
        <h1>{title}</h1>
        <p>{description}</p>
        </div>
        <div className='image'>
         <img src={img} alt="" /> 
         </div>
        </div>
    </div>
  )
}

export default WomenCard ;