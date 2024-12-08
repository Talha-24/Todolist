import React from 'react'
import NewTask from './Taskss/NewTask'
import Active from './Taskss/Active';
import Completed from './Taskss/Completed';

const Tasks = (propse) => {
    const tasks = propse.data?.tasks || [];

   console.log(tasks);
    
  return (
      <div className='mt-10 flex flex-nowrap  gap-5 overflow-x-auto'>
        {tasks.map((elem, idx) => {
      if (elem && elem.newTask && elem.newTask == true) {
        return <NewTask key={idx} data={elem} />;
      }
      if (elem && elem.active && elem.active == true) {
        return <Active key={idx} data={elem} />;
      }
      if (elem && elem.completed && elem.completed == true) {
        return <Completed key={idx} data={elem} />;
      }
    
     



    })}
        
         
          
            </div>
  )
}

export default Tasks