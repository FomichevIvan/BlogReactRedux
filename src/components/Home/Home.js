import {useSelector} from 'react-redux'
import BlogList from "../BlogList/BlogList";


const Home = () => {
 // подгружаем стор
  const blogs = useSelector(store => store)
 //передаем массив блогов в дочерний элемент на отрисовку
  return (
    <div>

      {blogs && <BlogList blogs={blogs}  />}
    </div>
  );
};

export default Home;
