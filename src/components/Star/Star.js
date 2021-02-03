import {useState} from 'react'
const Star = () => {

const [like, setLike] = useState(false)

  const likeHandler = (e) => {

    console.log(e.target);
    setLike(!like)
  }
  
  return (  
    <i onClick={likeHandler} className={!like ? "star fa fa-star-o" : "star fa fa-star" }aria-hidden="true"></i>
  );
}
 
export default Star;
