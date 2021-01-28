import NavBar from "./components/NavBar/NavBar";
import Home from "./components/Home/Home";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link,
} from "react-router-dom";
import Create from "./components/Create/Create";
import BlogDetails from "./components/BlogDetails/BlogDetails";
import Footer from "./components/Footer/Footer";

function App() {// создаем маршруты. Если маршрут динамический, то он будет переходить на нужный адрес
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
