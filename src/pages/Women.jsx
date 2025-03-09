import React from 'react'
import WomenCard from '../components/card/WomenCard'
import data from "../helper/data"

const Women = () => {
  return (
   <>
   {data[1].womenStyles.map(({id,image,title,description})=>( 
        <WomenCard key={id} img={image} title={title}  description ={description} /> 
       ))}
   </>
  )
}

export default Women