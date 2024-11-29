import React,{ useState } from "react"
import "./Todo.css"

const ToDoList=()=>{
    const[tasks,setTasks]=useState([]);
    const[task,setTask]=useState("");
    const[details,setDetails]=useState([]);
    const[detail,setDetail]=useState("");
    const[dates,setDates]=useState([]);
    const [date,setDate]=useState("");
    //Add Data
    const addData=()=>{
       if(task.trim() !== ""){
        setTasks([...tasks,task]);
        setTask("");
        setDetails([...details,detail]);
        setDetail("");
        setDates([...dates,date]);
        setDate("");
       }
    }
    //
    const deleteTask =(idx)=>{
        setTasks(tasks.filter((_, i)=> i !== idx));
        setDetails(details.filter((_,i)=>i !== idx));
        setDates(dates.filter((_, i)=>i !== idx))
    }
     
    
    return(
        <form onSubmit={(e)=>{
            e.preventDefault();
        }} >
            <div id="parentdiv">
                <h1>My Todo List</h1>
                <div id="itoms">
                    <input type="text" value={task} onChange={(e)=>{
                        setTask(e.target.value);
                    }} placeholder="Enter a task here..." />
                    <input onChange={(e)=>{
                        setDetail(e.target.value);
                    }} type="text" placeholder="Enter task description here..." value={detail} />
                    <input onChange={(e)=>{
                        setDate(e.target.value);
                    }} type="datetime-local"  value={date} /><button onClick={addData} id="addbtn">Add Task</button>
                    <div>
                        <ul id="task">
                            {tasks.map((element,idx)=>{
                                return(
                                <li key={idx}>{element} <button onClick={()=>{
                                    deleteTask(idx);
                                }} id="deletebtn">Delete</button></li>
                            )
                            })}
                        </ul>
                        <ul id="detail">
                            {details.map((detail,idx)=>{
                                return(
                                <p key={idx}> {detail}</p>
                            )
                            })}

                        </ul>
                        <ul id="date">
                            {dates.map((date,idx)=>{
                                return(
                                <p key={idx}>{date}</p>
                                )
                            })}
                        </ul>
                    </div>
                </div>



            </div>
        </form>
    )
}
export default ToDoList