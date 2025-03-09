import React, { Children } from 'react'
import MenCard from '../components/card/MenCard'
import data from "../helper/data"

const Men = () => {



  return (
    <>

   {data[0].menStyles.map(({id,image,title,description})=>( 
        <MenCard key={id} img={image} title={title}  description ={description} /> 
       ))}
       </>
  )
}

export default Men