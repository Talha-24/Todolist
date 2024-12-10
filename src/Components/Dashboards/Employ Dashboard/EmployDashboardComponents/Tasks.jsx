import React, { useContext } from 'react'
import NewTask from './Taskss/NewTask'
import Active from './Taskss/Active';
import Completed from './Taskss/Completed';
import { DataSender } from '../../../Context API/AuthContext';

const Tasks = (propse) => {
 console.log();
    const tasks = propse.data?.tasks || [];

   console.log("Tasks",tasks);
    
  return (
      <div className='mt-10 flex flex-nowrap  gap-5 overflow-x-auto'>
        {tasks.map((elem, idx,tasks) => {
      if (elem && elem.newTask && elem.newTask == true) {
        return <NewTask key={idx} data={elem}  />;
      }
      if (elem && elem.active && elem.active == true) {
        return <Active key={idx} data={elem} tasks={propse.data}  />;
      }
      if (elem && elem.completed && elem.completed == true) {
        return <Completed key={idx} data={elem} />;
      }
    
     



    })}
        
         
          
            </div>
  )
}

export default Tasks