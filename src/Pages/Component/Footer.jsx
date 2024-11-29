import React from "react"
import { Link } from "react-router-dom"
const Footer=()=>{
    
    return(
       <footer>
        <div><h2>Sheriyans</h2></div>
        <div><p>Sigma@gmail.com</p>
             <p>Alpha@gmail.com</p>
            
        </div>
        <div>
            <a href="#">Facebook</a>
            <a href="#">LinkedIn</a>
        </div>
        <div>
          <Link to="/">Home</Link>
          <Link to="/courses">Courses</Link>
        </div>
        
       </footer>
    )
}
export default Footer