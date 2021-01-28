import { useState, useEffect } from "react";
import useFetch from "../../utils/useFetch";// принимаем наш хук
import BlogList from "../BlogList/BlogList";


const Home = () => {
  // const hidden = {display: 'none'}
  const {data:blogs, isPending, err} = useFetch('https://jsonplaceholder.typicode.com/posts')//создали кастомный хук и импортировали его

  // const delHandler = (id) => {
  //   const newBlogs = text.filter((blog) => blog.id !== id);
  //   setText(newBlogs);
  // };
  // const [show, setShow] = useState(false)
  // const clickHandler = (e) => {
  //   setText(blogs)
  //   setShow(!show)
  // };

  // если есть загрузка - рисуем ее
  //если ошибка -  выводим
  //как прогрузятся блоги - передаем их на отрисовку в блоглист вместе с пропсами
  return (
    <div>
      {isPending && <div>loading...</div>}
      {err && <div>{err}</div>}
      {blogs && <BlogList blogs={blogs}  />}
    </div>
  );
};

export default Home;
