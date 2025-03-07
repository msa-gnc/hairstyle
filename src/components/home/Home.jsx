import React from 'react'
import hairStyle from "../../helper/data"
import Card from '../card/Card'

const Home = () => {

  return (
    <div>
       {hairStyle.map(({id,image,title,description})=>(
        <Card key={id} image={image} title={title}  description ={description} />
       ))}
    </div>
  )
}

export default Home