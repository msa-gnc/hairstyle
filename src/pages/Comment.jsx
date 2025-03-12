
import axios from "axios";
import { useEffect, useState } from "react";
import CommentCard from "../components/card/CommentCard";
import "./Comment.scss"
import avatarr  from "../helper/data"

const Comment = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);


  useEffect(() => {
    const getData = async () => {
      try {
        const response = await axios.get("https://jsonplaceholder.typicode.com/comments");
        setData(response.data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    getData();
    
  }, []); 
 

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div className="commentPage">
     
   
        {data.slice(0, 10).map(({id,name,email,body}, index) => (
         <CommentCard  
         key={id}
          name={name}
           email={email} 
           body={body}
           avatar={avatarr[2].avatar[index]?.url}
         
            />
        ))}
      
    </div>
  );
};

export default Comment;
