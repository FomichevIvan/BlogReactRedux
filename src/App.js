import NavBar from "./components/NavBar/NavBar";
import Home from "./components/Home/Home";
import {useDispatch} from 'react-redux'
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link,
} from "react-router-dom";
import Create from "./components/Create/Create";
import BlogDetails from "./components/BlogDetails/BlogDetails";
import Footer from "./components/Footer/Footer";
import { useEffect } from "react";
import { addBlogAC } from "./redux/actionCreators";

function App() {// создаем маршруты. Если маршрут динамический, то он будет переходить на нужный адрес
  const dispatch = useDispatch()

// внутри юзэффект подгружаем блоги с АПИ, обрезая до 10 шт
  useEffect(()=> {
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(res=> res.json())
    .then(res=>res.splice(res.length - 10))
    // .then(res => {
    //   console.log(res)
    //   return res.map(el=>el.isLiked = false)
     
      
    // })
    .then(res=>{
      // console.log(res)
      return  dispatch(addBlogAC(res))
    })
    
  }, [])


  return (
    <Router>
      <div className="App">
        <NavBar />
        <div className="content">
          <Switch>
            <Route exact path='/' component={Home}/>
            <Route exact path='/blogs/:id' component={BlogDetails}/>
            <Route exact path='/create' component={Create}/>
         
          </Switch>
          <Footer/>
        </div>
      </div>
    </Router>
  );
}

export default App;
