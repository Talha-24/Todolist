import React from "react"
const CardOne =(propse)=>{
    console.log(propse)
    return(
        <>
       <h1>{propse.name}</h1>
       <button>{propse.name}</button>
       <button>{propse.surname}</button>
       <button>{propse.age}</button>
       <button>{propse.city}</button>
       <button>{propse.profession}</button>
        </>
    )
}
export default CardOne