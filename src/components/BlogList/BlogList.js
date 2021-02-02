import { Link } from "react-router-dom";

const BlogList = ({ blogs, delHandler }) => {// получаем блоги, рендерим

  const likeHandler = (e) => {
    console.log(e.targer);
  }

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
            <div onClick={likeHandler}><i  className="star fa fa-star-o" aria-hidden="true"></i></div>
            </div> 
          );
        })}
    </div>
  );
};

export default BlogList;
