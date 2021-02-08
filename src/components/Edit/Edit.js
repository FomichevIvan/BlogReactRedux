import Create from "../Create/Create";
import {useState} from 'react'
import {useDispatch} from 'react-redux'
import { editBlogAC } from "../../redux/actionCreators";


const Edit = ({blog}) => {
  const dispatch = useDispatch()

const [title, setTitle] = useState(blog.title)
const [body, setBody] = useState(blog.body)
const [author, setAuthor] = useState(blog.userId)
const [butVisible, setButVisible] = useState(true)
// const [newBlog, setNewBlog] = useState(null)


const titleHandler = (e)=> {
  setTitle(e.target.value)

  
}
const bodyHandler = (e)=> {
  setBody(e.target.value)

}
const authorHandler = (e)=> {
 setAuthor(e.target.value)

}

const submitHandler = (e) => {
e.preventDefault()

const editedBlog =  {title, body, userId: blog.userId, id: blog.id}
dispatch(editBlogAC(editedBlog))
setButVisible(!butVisible)
e.target.children[1].disabled='true'
e.target.children[3].disabled='true';


}
  return ( 
    <div className="create">
    <h2>Edit Blog</h2>
    <form onSubmit={submitHandler}>
    <label>
      Blog title:
    </label>
    <input name="name" defaultValue={blog.title} type="text"  onChange={titleHandler} required/>
    <label>
      Blog body:
    </label>
    <textarea name="body" defaultValue={blog.body}type="text" required onChange={bodyHandler}></textarea>
    <div className="contBut">
  {butVisible && <button className="button">Edit Blog</button>}
  {!butVisible && <h2>Done!</h2>}
    
   </div>
    </form>
   
  </div>
   );
}
 
export default Edit;
