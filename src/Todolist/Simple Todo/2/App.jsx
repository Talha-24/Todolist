// // import React, { useState } from "react";
// // import Child1 from "./Child1";
// // import "./card.css";
// // import axios from "axios";
// // import Child3 from "./Child3";
// // const App =()=>{
// //    const data={
// //     "location": {
// //       "name": "London",
// //       "region": "City of London, Greater London",
// //       "country": "United Kingdom",
// //       "lat": 51.52,
// //       "lon": -0.11,
// //       "tz_id": "Europe/London",
// //       "localtime_epoch": 1613896955,
// //       "localtime": "2021-02-21 8:42"
// //     },
// //     "current": {
// //       "last_updated_epoch": 1613896210,
// //       "last_updated": "2021-02-21 08:30",
// //       "temp_c": 11,
// //       "temp_f": 51.8,
// //       "is_day": 1,
// //       "condition": {
// //         "text": "Partly cloudy",
// //         "icon": "//cdn.weatherapi.com/weather/64x64/day/116.png",
// //         "code": 1003
// //       },
// //       "wind_mph": 3.8,
// //       "wind_kph": 6.1,
// //       "wind_degree": 220,
// //       "wind_dir": "SW",
// //       "pressure_mb": 1009,
// //       "pressure_in": 30.3,
// //       "precip_mm": 0.1,
// //       "precip_in": 0,
// //       "humidity": 82,
// //       "cloud": 75,
// //       "feelslike_c": 9.5,
// //       "feelslike_f": 49.2,
// //       "vis_km": 10,
// //       "vis_miles": 6,
// //       "uv": 1,
// //       "gust_mph": 10.5,
// //       "gust_kph": 16.9,
// //       "air_quality": {
// //         "co": 230.3,
// //         "no2": 13.5,
// //         "o3": 54.3,
// //         "so2": 7.9,
// //         "pm2_5": 8.6,
// //         "pm10": 11.3,
// //         "us-epa-index": 1,
// //         "gb-defra-index": 1
// //       }
// //     }
// //   }
// //   let location=data.location;
// //   console.log(location)
// //    console.log("Name ",location.name)
// //    console.log("Region ",location.region)
// //    console.log("Country ",location.country);
// //    console.log("Lat ",location.lat);
// //    console.log("lon ",location.lon)
// //    console.log("Localtime",location.localtime)
// import React from "react"
// import { Route, Routes } from "react-router-dom"
// import Home from "./Pages/Home"
// import "./Pages/Component/Style.css"
// import Courses from "./Pages/Courses"
// import Product from "./Pages/Product"
// import About from "./Pages/About"
// import Contact from "./Pages/Contact"
// import Header from "./Pages/Component/Header"
// import Footer from "./Pages/Component/Footer"
// const App =()=>{
/*
import { useState } from "react";
import "./Todo.css"
const App=()=>{
  const [tasks,setTasks]=useState([]);
  const [task, setTask]=useState("");
  const [descriptions, setDescriptions]=useState([]);
  const [description, setDescription]=useState("");
  //
  //AddTask here...
  const addTask=()=>{
   if(task.trim() !== ""){
    setTasks([...tasks, task]);
    setTask("");
    console.log(tasks)
    setDescriptions([...descriptions, description]);
    setDescription("");
    console.log(descriptions);
   }
  }
  //
  const deleteTask =(index)=>{
    setTasks(tasks.filter((_, i)=> i !== index));
    setDescriptions(descriptions.filter((_, i)=> i !== index));

     }
 
    return(
      <form onSubmit={(e)=>{
        e.preventDefault();
      }}>
<div id="parentdiv">
  <h1>My Todo List</h1>
  <div id="itoms">
<input onChange={(e)=>{
  setTask(e.target.value)
}} type="text" value={task} placeholder="Enter tasks here..."/>
<input onChange={(e)=>{
  setDescription(e.target.value)
}} type="text" value={description} placeholder="Enter Description here..." />
<button id="addbtn" onClick={()=>{
  addTask();
}}>Add Task</button>
</div>
<ul>
 {tasks.map((element,index)=>{
  return(
    <li key={index}> {element} <button id="deletebtn" onClick={()=>{
      deleteTask(index);
    }}>Delete</button> </li>
  )
 })}
 </ul>
 <ul id="ulTwo">
  {descriptions.map((descript,idx)=>{
    return(
    <li key={idx} id="descriptp">{descript}</li>
  )
  })}
 </ul>
 
 
 

</div>
</form>
  )
}
export default App
 */
//   return(
//     <div>
//       <Header />
      

//      <Routes>
   
//       <Route path="/" element={<Home />}  />
//       <Route path="/courses" element={<Courses/>} />
//       <Route path="/product"  element={<Product />} />
//       <Route path="/about" element={<About />}/>
//       <Route path="/contact" element={ <Contact /> } />
//      </Routes>
     
//      <Footer />
//     </div>
//   )
// }
// export default App
                            
// //     return(
// //       <>
// //      <div>
// //      <Child3 name={location.name} region={location.region} country={location.country} lat={location.lat} lon={location.lon} localtime={location.localtime} />
// //       </div>
      
// //       {/* Three Methods we have to send data from Parent to Desired Child Component
// //       1..data='value'     data="Talha"/*In this type of data sending data is assigned directly to propse(attribute)
// //       2..data={variable(js)} let name="Talha"In the second method I use Js variable, still it is also not good
// //       3..data={variable(react)}  const [data,setdata]=useState('Talha');In the 3rd method I use Hookstates to transfer the data to child
// //       4..data={object}In this method JSON data,either remotely(APi) or in local is transferred to desired child
// //        const users=[{
// //         name: "Talha",
// //         surname: "Abdul Sattar",
// //         age: 22,
// //         city: "Lahore",
// //         profession: "Doctor",
// //     },
// //       5. The last but not least in this method I am accessing data from External Server as API using axios library]  
// //    */
// //       </>
// //     )
   
// // }
   

// // export default App
// import React, { useEffect, useState } from "react"
// import Header from "./Pages/Header"
// import { Route, Routes } from "react-router-dom"
// import Home from "./Pages/Home"
// import About from "./Pages/About"
// import Courses from "./Pages/Courses"
// import Contact from "./Pages/Contact"
// import axios from "axios"


// const App =()=>{
//   const[data,setData]=useState();
//   const apihandler= async ()=>{
//     let response=await axios.get("https://picsum.photos/v2/list?page=2&limit=10");
//     setData(response.data)
//     console.log(data);
// }
// useEffect(()=>{
//   apihandler()
// },[])
//   return(
//     <div>
//     <Header />
//     <Routes>
//       <Route path="/" element={<Home  />}  />
//       <Route path="/about" element={<About />} />
//       <Route path="/courses" element={<Courses/>} />
//       <Route path="/contact" element={<Contact />}/>
//     </Routes>
     






//     </div>
//   )
// }
// export default App

//78-147
/*
import React from "react"
import TodoList from "./Todolist/TodoList"
const App =()=>{
  return(
    <div>
      <TodoList />

    </div>
  )
}
export default App









































*/

import React from "react"
import ToDoList from "./Todolist/Simple Todo/2/ToDoList"
const App =()=>{

  return(
<div>
 <ToDoList/>
</div>
  )
}
export default App