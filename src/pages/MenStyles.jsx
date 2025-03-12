
import HairCard from '../components/card/HairCard'

import data from "../helper/data"

const MenStyles = () => {



  return (
    <>

   {data[0].menStyles.map(({id,image,title,description})=>( 
        <HairCard key={id} img={image} title={title}  description ={description} /> 
       ))}
       </>
  )
}

export default MenStyles;