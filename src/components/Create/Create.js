import { useState } from "react";
import {useDispatch} from 'react-redux'

const Create = () => {
const dispatch = useDispatch()
const [title, setTitle] = useState(null)
const [body, setBody] = useState(null)
const [author, setAuthor] = useState('')

const titleHandler = (e)=> {
  setTitle(e.target.value)
  
}
const bodyHandler = (e)=> {
  setBody(e.target.value)
  console.log(body);
  
}
const authorHandler = (e)=> {
 setAuthor(e.target.value)
  console.log(author);
  
}

const submitHandler = (e) => {
e.preventDefault()

// const {title, body, author} = e.target
}

  return ( 
    <div className="create">
      <h2>Create new Blog</h2>
      <form onSubmit={submitHandler}>
      <label>
        Blog title:
      </label>
      <input type="text" placeholder="title" onChange={titleHandler} required/>
      <label>
        Blog body:
      </label>
      <textarea type="text" required placeholder="text here" onChange={bodyHandler}></textarea>
      <label>
        Blog author:
      </label>
      <select onChange={authorHandler}>
       
       
        <option value="guest">Guest</option>
        <option value="me">Me</option>
      </select>
      <button>Add Blog</button>
      </form>
    </div>
   );
}
 
export default Create;
