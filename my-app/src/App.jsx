import Product from "./components/products"
import cupcakesJSON from "./data/cupcakes.json"
import cakesJSON from "./data/cakes.json"
import Header from "./components/header.jsx"
import Nav from "./components/Nav.jsx"
import Footer from "./components/footer.jsx"
import "./styles/styles.css";

function App() {
  const CupCakesArray = cupcakesJSON.map((item) => {
    return (
      
      <Product 
      key={item.id}
      fileName={item.image}
      title={item.title}
      price={item.price}
      />
    );
  });
  const CakesArray = cakesJSON.map((item) => {
    return (
      
      <Product 
      key={item.id}
      fileName={item.image}
      title={item.title}
      price={item.price}
      />
    );
  });
  

  return (
  <div>
    <Header/> 

    <Nav />
   
    <section className="content"> 
        <div className="points"> <h2>Cupcakes</h2> </div>
        <div className="grid">{CupCakesArray}</div>
        </section>

    <section className="content"> 
        <div className="points"> <h2>Wedding Cakes</h2> </div>
        <div className= "grid">{CakesArray}</div>
        </section>

    <Footer />
   
  </div>
);
}

export default App;
