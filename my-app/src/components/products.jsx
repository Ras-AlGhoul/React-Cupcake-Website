import React from "react";
import cupcakesJSON from "../data/cupcakes.json"
import cakesJSON from "../data/cakes.json"

function Product({fileName, title, price}){

    const imageObject = require(`../images/cupCakes/${fileName}`);
    const imageURL = imageObject.default;
    return (
        <article className="picture-item">
                <img src= {imageURL} alt={title}/>
                <h3>{title}</h3>
                <p>price: {price} kr</p>
              <div class="container">
                <button class="btn btn1">Add+</button>
                <button class="btn btn2">Buy</button>
              </div>
            </article>
        );
      }

export default function ProductPage(){

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
    <section className="content"> 
    <div className="points"> <h2>Cupcakes</h2> </div>
    <div className="grid">{CupCakesArray}</div>
    </section>

   <section className="content"> 
    <div className="points"> <h2>Wedding Cakes</h2> </div>
    <div className= "grid">{CakesArray}</div>
    </section>
    </div>


  )  



  }


