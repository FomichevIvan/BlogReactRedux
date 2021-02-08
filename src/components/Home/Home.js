import { useSelector } from "react-redux";
import BlogList from "../BlogList/BlogList";
import { loadBlogsAC } from "../../redux/actionCreators";
import { useDispatch } from "react-redux";
import { useState } from "react";

import LoaderExampleText from "../Loader/Loader";

const Home = () => {
  const [isLoading, setIsLoading] = useState(false);

  const dispatch = useDispatch();
  const blogs = useSelector((store) => store);

  const loadHandler = () => {
    setIsLoading(!isLoading);
    setTimeout(() => dispatch(loadBlogsAC()), 1500);
    setIsLoading(!isLoading);
  };
  // подгружаем стор
  //передаем массив блогов в дочерний элемент на отрисовку
  return (
    <>
      {blogs.length ? (
        <div className="home">{<BlogList blogs={blogs} />}</div>
      ) : (
        <div className="home">
          {!isLoading && (
            <button className="button" onClick={loadHandler}>
              Load Blogs
            </button>
          )}
          {isLoading && <LoaderExampleText />}
        </div>
      )}
    </>
  );
};

export default Home;
