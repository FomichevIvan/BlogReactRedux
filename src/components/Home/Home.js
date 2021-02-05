import { useSelector } from "react-redux";
import BlogList from "../BlogList/BlogList";
import { loadBlogsAC } from "../../redux/actionCreators";
import { useDispatch } from "react-redux";


const Home = () => {

  const dispatch = useDispatch();
  const blogs = useSelector((store) => store);




  const loadHandler = () => {
    dispatch(loadBlogsAC()) 
  };
  // подгружаем стор
  //передаем массив блогов в дочерний элемент на отрисовку
  return (
    <>
    
      {blogs.length ?  (
        <div className="home">
          {/* <button disabled={hide} className="button" onClick={loadHandler}>
            {hide ? "Blogs loaded!" : "Load blogs"}
          </button> */}
          {<BlogList blogs={blogs} />}
        </div>
      )  :(
        <div className="home">
          <button className="button" onClick={loadHandler}>
            Load Blogs
          </button>
        </div>
      )}
    </>
  );
};

export default Home;
