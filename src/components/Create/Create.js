import { useState } from "react";
import {useDispatch} from 'react-redux'
import {addNewBlogAC } from "../../redux/actionCreators";

const Create = () => {
const dispatch = useDispatch()

// сохраняем 
const [title, setTitle] = useState(null)
const [body, setBody] = useState(null)
const [author, setAuthor] = useState(null)
const [newBlog, setNewBlog] = useState(null)


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

const newBlog =  {title, body, userId: author, id: Math.round(Math.random()*1000)}
dispatch(addNewBlogAC(newBlog))
e.target.name.value = ''
e.target.body.value = ''
e.target.author.value = 'Choose author'
setNewBlog(`New Blog ${title} was added!)`)
}


  return ( 
    <div className="create">
      <h2>Create new Blog</h2>
      <form onSubmit={submitHandler}>
      <label>
        Blog title:
      </label>
      <input name="name" type="text" placeholder="title" onChange={titleHandler} required/>
      <label>
        Blog body:
      </label>
      <textarea name="body" type="text" required placeholder="text here" onChange={bodyHandler}></textarea>
      <label>
        Blog author:
      </label>
      <select name="author" onChange={authorHandler}>
       
      <option  defaultValue="">Choose author</option>
        <option value="guest">Guest</option>
        <option value="me">Me</option>
      </select>
      <button>Add Blog</button>
      </form>
      <p>{newBlog}</p>
    </div>
   );
}
 
export default Create;
