import { Link } from "react-router-dom";

const BlogList = ({ blogs, delHandler }) => {// получаем блоги, рендерим

  return (
    <div className="home">
      <h2>HomePage</h2>
      {blogs &&
        blogs.map((blog) => {
          return (// обернули в ссылку, динамически задавая нужный адрес. Теперь при клике на блог, нас перекидывает именно на его страницу            
            <Link key={blog.id} className="details" to={`blogs/${blog.id}`}>
            <div className="blog" >
              <h3>Title: {(blog.title).slice(0, 20) + '...'}</h3>
              <p className="author">Author: {blog.userId} </p>
             
            </div>
            </Link>
          );
        })}
    </div>
  );
};

export default BlogList;
