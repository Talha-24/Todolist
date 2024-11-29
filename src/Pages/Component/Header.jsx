import React from "react"
import "./Style.css"
import { Link } from "react-router-dom"
const Header=()=>{
    
    return(
        <div id="navbar">
            <h2>Sheriyans</h2>
            <div id="listitems">
                <Link to="/">Home</Link>
                <Link to="/courses">Courses</Link>
                <Link to="product">Product</Link>
                <Link to="about">About</Link>
                <Link to="contact">Contact</Link>
            

            </div>
        </div>
    )
}
export default Header