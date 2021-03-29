export default function Product({fileName, title, price}){
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
