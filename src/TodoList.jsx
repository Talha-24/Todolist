import { useState } from "react"
import "./card.css"
const TodoList=()=>{
    const [todos,SetTodos]=useState([{id: 1, text: "Walk to School"},{id: 2, text: "Go To Zeeshan Sahb's House"}]);
   const handleAddToDo=(text)=>{
    SetTodos([...todos, {id: todos.length+1, text}]);

   };

    return(
       
        <div id="todo">
            <h1>Todo List</h1>
            <ul>
                {todos.map((element)=>{
                })}
                <li>{element6AAD8.text}</li>
            </ul>
            <input type="text" onChange={(e)=>{
               handleAddToDo(e.target.value);
            }} placeholder="Enter your To do Task here..." />


        </div>
    )
}
export default TodoList