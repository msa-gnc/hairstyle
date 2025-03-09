import React from 'react'
import "./Card.scss"

const MenCard = ({title,img,description}) => { 
  return (
    <div className='container'>

        <div className='content' >
        <h1>{title}</h1>
        <p>{description}</p>
        </div>
        <div className='image'>
         <img src={img} alt="" /> 
         </div>
        </div>
  )
}

export default MenCard;