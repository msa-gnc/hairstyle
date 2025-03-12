
import data from "../helper/data"
import HairCard from "../components/card/HairCard";

const Styles = () => {



  return (
    <>

   {data[1].womenStyles.map(({id,image,title,description})=>( 
        <HairCard key={id} img={image} title={title}  description ={description} /> 
       ))}
       </>
  )
}

export default Styles;