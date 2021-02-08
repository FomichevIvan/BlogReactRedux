import { Link } from "react-router-dom";
import Star from "../Star/Star";
import PaginationExampleShorthand from "../Pagination/Pagination";
import { useState } from "react";

const BlogList = ({ blogs }) => {
  
  const [page, setPage] = useState(1)
  const itemsOnPage = 10
  const lastBlogIndex = page * itemsOnPage
  const firstBlogIndex = lastBlogIndex - itemsOnPage
  const currentBlogs = blogs.slice(firstBlogIndex, lastBlogIndex)

 


  return (
    <div className="home">
      <h2>Blogs</h2>

      {
        currentBlogs.map((blog) => {
          return (
            // обернули в ссылку, динамически задавая нужный адрес. Теперь при клике на блог, нас перекидывает именно на его страницу
            <div key={blog.id} className="card">
              <Link className="details" to={`blogs/${blog.id}`}>
                <div className="blog">
                  <h3>Title: {blog.title.slice(0, 20) + "..."}</h3>
                  <p className="author">Author: {blog.userId} </p>
                </div>
              </Link>
              <Star isLiked={blog.isLiked} id={blog.id} />
            </div>
          );
        })}
         {blogs.length > itemsOnPage ?<PaginationExampleShorthand blogs={blogs} itemsOnPage={itemsOnPage} page={page} setPage={setPage}/> : null}
    </div>
  );
};

export default BlogList;
