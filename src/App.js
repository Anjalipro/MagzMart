import logo from './logo.svg';
import './App.css';
import About from './pages/About';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Categories from './pages/Categories';
import Footer from './components/Footer';
import SearchBar from './components/SearchBar';
import Login from './pages/Login';
import Modal from './pages/Modal';



function App() {
  return (
    <div className="App">
      <Router>
        <Navbar/>
        <Modal/>
       
        <Switch>
          <Route path ="/" exact component={Home} />
          <Route path ="/about" exact component={About} />
          <Route path ="/categories" exact component={Categories} ></Route>
          <Route path ="/Login" exact component={Login} />
          
        </Switch>
        <Footer/> 
      </Router>
    </div>
  );
}

export default App;
