import {useSelector} from 'react-redux'
import { Link } from "react-router-dom";
import { Pagination } from 'semantic-ui-react';
import PaginationExampleShorthand from '../Pagination/Pagination';
import Star from "../Star/Star";
import {useState} from 'react'
const Favorite = () => {
  const store = useSelector(store=>store)
  const blogs = store.filter(blog => blog.isLiked)

  const [page, setPage] = useState(1)
  const itemsOnPage = 10
  const lastBlogIndex = page * itemsOnPage
  const firstBlogIndex = lastBlogIndex - itemsOnPage
  const currentBlogs = blogs.slice(firstBlogIndex, lastBlogIndex)

  return ( 
    <div className="home">
      

          
      {
        currentBlogs.map((blog) => {
          return (// обернули в ссылку, динамически задавая нужный адрес. Теперь при клике на блог, нас перекидывает именно на его страницу   
            <div key={blog.id} className="card">        
            <Link  className="details" to={`blogs/${blog.id}`}>
            <div className="blog" >
              <h3>Title: {(blog.title).slice(0, 20) + '...'}</h3>
              <p className="author">Author: {blog.userId} </p>
             
            </div>
            </Link>
            <Star isLiked={blog.isLiked} id={blog.id}/>
            </div>
          );
        })}
         { blogs.length > itemsOnPage ? <PaginationExampleShorthand blogs={blogs} page={page} setPage={setPage} itemsOnPage={itemsOnPage}/> : null}
         {blogs.length ===  0 ? <div>No favorite blogs</div> : null}
    </div>
   );
}
 
export default Favorite;
