import ProductPage from "./components/products"
import Header from "./components/header.jsx"
import Nav from "./components/Nav.jsx"
import Footer from "./components/footer.jsx"
import "./styles/styles.css";
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Home from "./components/home.jsx"
import About from "./components/about.jsx"
import Contact from "./components/contact.jsx"

function App() {
  

  return (
    <Router>
    <div>

    <Header/> 

    <Nav />

    <Switch>
    <Route path= "/home" component={Home}/>
    <Route path="/about" component={About} />
    <Route path="/contact" component={Contact}/>
    <Route path="/products" component={ProductPage}/>
    </Switch>

    <Footer />
   
  </div>
  </Router>
);
}

export default App;
