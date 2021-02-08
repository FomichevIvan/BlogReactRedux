import Create from "../Create/Create";
import {useState} from 'react'
import {useDispatch} from 'react-redux'
import { editBlogAC } from "../../redux/actionCreators";


const Edit = ({blog}) => {
  const dispatch = useDispatch()

const [title, setTitle] = useState(null)
const [body, setBody] = useState(null)
const [author, setAuthor] = useState(null)
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
// e.target.name.value = ''
// e.target.body.value = ''
// e.target.author.value = ''
// setNewBlog(`New Blog ${title} was added!)`)
}
  return ( 
    <div className="create">
    
    <form onSubmit={submitHandler}>
    <label>
      Blog title:
    </label>
    <input name="name" defaultValue={blog.title} type="text" placeholder="title" onChange={titleHandler} required/>
    <label>
      Blog body:
    </label>
    <textarea name="body" defaultValue={blog.body}type="text" required placeholder="text here" onChange={bodyHandler}></textarea>
    <label>
      Blog author:
    </label>
    <input name="author" value={blog.userId} type="text" placeholder="author" onChange={authorHandler} required/>
   <div className="contBut">
   <button className="button">Edit Blog</button>
    
   </div>
    </form>
   
  </div>
   );
}
 
export default Edit;
