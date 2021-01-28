import {Link} from 'react-router-dom'

const NavBar = () => {
//использование Link позволяет быстрее переходить по ссылкам и не обращаться к серверу каждый раз
  return (
    <nav className="navbar">
     <h1>Blog</h1>
      <div className="links">
        <Link to="/">Home </Link>
        <Link to="/create">New Blog </Link>
      </div>
    </nav>
  );
};

export default NavBar;
