import React from "react"
const Navbar =()=>{
    return(
        <div className="flex items-center justify-between px-10 py-5" id="footer">
            <h2 className="text-4xl" >Logo</h2>
            <div className="flex items-center gap-10 text-xl " id="listitems">
                <h4><a href="">Home</a></h4>
                <h4><a href="">Courses</a></h4>
                <h4><a href="">Notes</a></h4>
                <h4><a href="">Blog</a></h4>
               

            </div>

        </div>
    )
}
export default Navbar