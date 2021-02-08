import { useParams } from "react-router-dom";
import {useDispatch} from 'react-redux'
import{useHistory } from "react-router-dom"
import {useSelector} from 'react-redux'
import {delBlogAC, editBlogAC} from '../../redux/actionCreators'
import { useState } from "react";
import Edit from "../Edit/Edit";
import DropdownExampleSimple from "../Drop/Drop";
import DropdownExampleFloating from "../Drop/Drop";


const BlogDetails = () => {
  const dispatch = useDispatch()// подключаем диспатч
  const store = useSelector(store => store)// выгружаем стор из редакс
  const [curBlog, setCurBlog] = useState(null)


  // подключаем возможность перемещаться по страницам
  const history = useHistory()
  // const id = history.location.pathname.match(/\d+$/gm)[0]//используем хистори и регулярки, чтобы получить айди
  // можно было просто использовать useParams))

  // хэндлер, чтобы возвращаться назад
  const handlerBack = () => {
  history.goBack()
  }
  

  const {id} = useParams()// мы задали в App.js динамический маршрут. теперь мы используем данный айди
  const blog = store.filter(el => el.id === +id)[0]// получили блог из стора, он нулевой элемент нашего массива блогов

  //удаление блога
  const handlerDel = () => {    
    dispatch(delBlogAC(id))
    history.goBack()
  }

  //редактирование блога
  const handleEdit = () => {
    setCurBlog(blog)
  }

  return ( 
    <div className="detailed">
        {blog && <article>
        <div><span>{blog.title} by {blog.userId}</span></div>
        <div className="bodyBlog">{blog.body}</div>
        {/* <DropdownExampleFloating handleEdit={handleEdit} handlerDel={handlerDel}/> */}
        </article>
        
        }
        <div className="buttons">
        <div><button className="blogBut" onClick={handlerBack}>Back</button></div>
        <div><button className="blogBut" onClick={handlerDel}>Delete</button></div>
        {!curBlog && <div><button className="blogBut" onClick={handleEdit}>Edit</button></div>}
        </div>
        {curBlog && <Edit blog={blog}/>}
        
        
    </div>
   );
}
 
export default BlogDetails;
