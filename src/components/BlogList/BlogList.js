import { Link } from "react-router-dom";
import Star from "../Star/Star";

const BlogList = ({ blogs }) => {// получаем блоги, рендерим


  return (
    <div className="home">
      <h2>HomePage</h2>
      
      {blogs &&
        blogs.map((blog) => {
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
    </div>
  );
};

export default BlogList;
