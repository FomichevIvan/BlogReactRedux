import {useState} from 'react'
import { likeBlogAC } from '../../redux/actionCreators'
import { blogReducer } from '../../redux/blogReducer'

const Star = () => {

const [like, setLike] = useState(false)


  const likeHandler = (e) => {    
    const parent = e.target.parentNode.children[0].href
    const [id] = parent.match(/\d+$/gm)
    setLike(!like)
    console.log(id);
    blogReducer(likeBlogAC(id))
  }
  
  return (  
    <i onClick={likeHandler} className={!like ? "star fa fa-star-o" : "star fa fa-star" } aria-hidden="true"></i>
  );
}
 
export default Star;
