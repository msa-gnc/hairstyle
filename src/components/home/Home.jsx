import React from 'react'
import Card from '../card/Card'
import data from "../../helper/data"
import { BrowserRouter } from 'react-router-dom'


const Home = () => {
console.log(data[0].menStyles)


  return (

 
    <div>
       {data[0].menStyles.map(({id,image,title,description})=>( 
        <Card key={id} img={image} title={title}  description ={description} /> 
       ))}
       
       {data[1].womenStyles.map(({id,image,title,description})=>( 
        <Card key={id} img={image} title={title}  description ={description} /> 
       ))}
       

    </div>
  )
}

export default Home