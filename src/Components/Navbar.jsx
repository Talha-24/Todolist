import React from "react"
const Navbar =(propse)=>{
    console.log(propse)
    return(
        <>
        <nav className="flex items-center justify-between py-5 px-10 ">
            <h2 >Apna College</h2>
            <div id="items" className="flex items-center gap-10 text-xl ">
                <button>New Course 4.0</button>
                <h4>Home</h4>
                <h4>Login</h4>
                <h4>Signup</h4>
            </div>
        </nav>
        </>
    )
}
export default Navbar