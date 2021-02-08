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
import { addBlogAC, loadBlogsAC } from "./redux/actionCreators";
import Favorite from "./components/Favorite/Favorite";
import Edit from "./components/Edit/Edit";


function App() {// создаем маршруты. Если маршрут динамический, то он будет переходить на нужный адрес
  const dispatch = useDispatch()


  return (
    <Router>
      <div className="App">
        <NavBar />
        <div className="content">
          <Switch>
            <Route exact path='/' component={Home}/>
            <Route exact path='/blogs/:id' component={BlogDetails}/>
            <Route exact path='/create' component={Create}/>
            <Route exact path='/favorite' component={Favorite}/>
            <Route exact path='/blogs/:id/edit' component={Edit}/>
         
          </Switch>
        </div>
          <Footer/>
      </div>
    </Router>
  );
}

export default App;


