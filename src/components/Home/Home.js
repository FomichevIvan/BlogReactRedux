import { useSelector } from "react-redux";
import BlogList from "../BlogList/BlogList";
import { loadBlogsAC } from "../../redux/actionCreators";
import { useDispatch } from "react-redux";
import { useState } from "react";

const Home = () => {
  const [hide, setHide] = useState(false);
  const dispatch = useDispatch();
  const loadHandler = () => {
    dispatch(loadBlogsAC());
    setHide(!hide);
  };
  // подгружаем стор
  const blogs = useSelector((store) => store);
  //передаем массив блогов в дочерний элемент на отрисовку
  return (
    <>
      {!hide ? (
        <div className="home">
          <button disabled={hide} className="center button" onClick={loadHandler}>
            {hide ? "Blogs loaded!" : "Load blogs"}
          </button>
        </div>
      ) : (
        <div className="home">
          {/* <button disabled={hide} className="button" onClick={loadHandler}>
            {hide ? "Blogs loaded!" : "Load blogs"}
          </button> */}
          <BlogList blogs={blogs} />
        </div>
      )}
    </>
  );
};

export default Home;
