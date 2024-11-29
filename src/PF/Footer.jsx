import React from "react"
import FootptOne from "../Components/FootptOne.jsx"
import FootptTwo from "../Components/FootptTwo.jsx"
import FootptThree from "../Components/FootptThree.jsx"
const Footer =()=>{
    return(
        <footer className="flex items-center justify-between bg-emerald-900 relative bottom-100 text-white bg-emerald w-full py-2 px-12">
            <div>
            <img className="text-white  w-quarter h-quarter" src=""  />
            <h2 className="text-2xl">MindChanger</h2>
            </div>
            <FootptOne></FootptOne>
            <FootptTwo></FootptTwo>
            <FootptThree></FootptThree>
            
        </footer>
    )
}
export default Footer