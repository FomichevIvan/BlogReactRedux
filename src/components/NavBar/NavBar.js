import { Link } from "react-router-dom";

const NavBar = () => {
  //использование Link позволяет быстрее переходить по ссылкам и не обращаться к серверу каждый раз
  return (
    <nav className="navbar">
      <Link to="/">
        <h1>Blog</h1>
      </Link>
      <div className="links">
        <Link to="/">Blogs </Link>
        <Link to="/create">New Blog </Link>
        <Link to="/favorite">
          <i className="star fa-lg fa fa-star" aria-hidden="true"></i>
        </Link>
      </div>
    </nav>
  );
};

export default NavBar;
