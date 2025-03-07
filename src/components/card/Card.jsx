import React from 'react'
import "./Card.scss"

const Card = ({title,image,description}) => {
  return (
    <div className='container'>

        <div className='content' >
        <h1>{title}</h1>
        <p>{description}</p>
        </div>
        <div className='image'>
         <img src={image} alt="" />
         </div>
        </div>
  )
}

export default Card