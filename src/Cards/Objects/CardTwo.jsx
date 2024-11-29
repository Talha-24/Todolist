import React from "react"
const CardTwo =(propse)=>{
    console.log(propse)
    return(
       <>
       <h1>{propse.name}</h1>
       <button>{propse.name}</button>
       <button>{propse.surname}</button>
       <button>{propse.city}</button>
       <button>{propse.age}</button>
       <button>{propse.profession}</button>
       </>
    )
}
export default CardTwo