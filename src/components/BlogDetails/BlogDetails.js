import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import useFetch from "../../utils/useFetch"
import{useHistory } from "react-router-dom"


const BlogDetails = () => {
  // подключаем возможность перемещаться по страницам
  const history = useHistory()
  // хэндлер, чтобы возвращаться назад
  const handlerBack = () => {
    history.push('/')

  }
  
  const {id} = useParams()// мы задали в Апп.жс динамический маршрут. теперь мы используем данный айди
  // снова используем наш хук, чтообы получить данные
  const {data: blog, isPending, err} = useFetch(`https://jsonplaceholder.typicode.com/posts/${id}`)


  console.log(blog);

  return ( 
    <div className="detailed">
      {isPending && <div>Loading...</div>}
      {err && <div>{err}</div>}
      {blog && <article>
        <div><span>{blog.title} by {blog.userId}</span></div>
        <div className="bodyBlog">{blog.body}</div>
        </article>}
        <div ><button className="blogBut" onClick={handlerBack}>Back to Blogs</button></div>
    </div>
   );
}
 
export default BlogDetails;
