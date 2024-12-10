import React from 'react'

const NewTask = ({data}) => {
    console.log(data.taskCategory);
    let username="Accepted";
    console.log(username);
 
  return (
    <div className='w-[300px] flex-shrink-0 border-[2px] border-purple-600 p-4 '>
            <div className='flex justify-between'>
                <h4 className='bg-red-600 py-1 px-2 rounded' >{data.taskCategory}</h4>
                <h3>10 Dec 2024</h3>
            </div>
           
            <div className='flex  items-center gap-10 py-1 px-1 mt-5 '>
                <h6 className='bg-green-600 p-1 rounded-sm'>New Task</h6>
                <h5 className='text-xl font-semibold text-justify'>{data.taskTitle}</h5>
            </div>
            <p className='text-justify'>{data.taskDescription}</p>
            <div className='flex justify-between  mt-4'>
                <button id="loginbtn" onClick={(e)=>{let turn=confirm("You're accepting the task,are you sure?"); if(turn){ e.target.innerHTML="Task Accepted"; e.target.style.backgroundColor="purple";e.target.style.color="white";e.target.style.fontWeight="bold";}}} className='py-1 px-2 bg-green-600 rounded-sm'>Accept Task</button>
                <button id="loginbtn" onClick={(e)=>{alert("Task is already accepted");e.target.style.display="none"}}  className='py-1 px-2 bg-red-600 rounded-sm'>Reject Task</button>
            </div>

        </div>
  )
}

export default NewTask