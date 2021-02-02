import { useParams } from "react-router-dom";
import {useDispatch} from 'react-redux'
import{useHistory } from "react-router-dom"
import {useSelector} from 'react-redux'
import {delBlogAC} from '../../redux/actionCreators'


const BlogDetails = () => {
  const dispatch = useDispatch()// подключаем диспатч
  const store = useSelector(store => store)// выгружаем стор из редакс
  console.log(store);


  // подключаем возможность перемещаться по страницам
  const history = useHistory()
  const id = history.location.pathname.match(/\d+$/gm)[0]//используем хистори и регулярки, чтобы получить айди
// console.log(h);
  // хэндлер, чтобы возвращаться назад
  const handlerBack = () => {
    history.push('/')
  }
  
  // const r = h.match(/\d+$/gm)[0]
  // console.log(r);
  // const {id} = useParams()// мы задали в Апп.жс динамический маршрут. теперь мы используем данный айди
  const blog = store.filter(el => el.id === +id)[0]// получили блог из стора, он нулевой элемент нашего массива блогов

  //удаление блога
  const handlerDel = () => {    
    dispatch(delBlogAC(id))
    history.push('/')

  }

  return ( 
    <div className="detailed">
        {blog && <article>
        <div><span>{blog.title} by {blog.userId}</span></div>
        <div className="bodyBlog">{blog.body}</div>
        </article>}
        <div className="buttons">
        <div><button className="blogBut" onClick={handlerBack}>Back to Blogs</button></div>
        <div><button className="blogBut" onClick={handlerDel}>Delete Blog</button></div>
        </div>
        
    </div>
   );
}
 
export default BlogDetails;
