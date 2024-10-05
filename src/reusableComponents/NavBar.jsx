import React from "react";
import { Link } from "react-router-dom";
const NavBar =()=>{
    return(
        <>
         <nav className="bg-black sm:px-2 md:px-16 h-[60px] py-4">
            <ul className="flex  items-center text-lg">
                 <li><Link to="/" className="text-white mr-8 items-center">Ecommerce</Link></li>
                <li><Link to="/products" className="text-white" >Shop</Link></li>
            </ul>
        </nav>
        </>
    )
}
export default NavBar;