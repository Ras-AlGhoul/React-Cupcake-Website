import React from "react";
import {Link} from "react-router-dom";

export default function Nav(){
    return (
        <nav className="main-menu">
       
            <Link to= "/home">
            <a >Home</a>
            </Link>
            <Link to= "/products">
            <a>Products</a>
            </Link>
            <Link to= "/about">
            <a>About</a>
            </Link>
            <Link to="/contact">
            <a>Contact</a>
            </Link>
     
    </nav>

    );
   
}