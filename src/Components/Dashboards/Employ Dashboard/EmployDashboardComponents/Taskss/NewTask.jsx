import React from 'react'

const NewTask = ({data}) => {
    console.log(data.taskCategory);
 
  return (
    <div className='w-[300px] flex-shrink-0 border-[2px] border-purple-600 p-4 '>
            <div className='flex justify-between'>
                <h4 className='bg-red-600 py-1 px-2 rounded' >{data.taskCategory}</h4>
                <h3>10 Dec 2024</h3>
            </div>
            <div className='flex justify-between items-center gap-4 py-1 px-1 mt-5 '>
                <h6 className='bg-purple-600 p-1 rounded-sm'>New Tasks</h6><h5 className='text-xl font-semibold'>{data.taskTitle}</h5>
            </div>
            <p className='text-justify'>{data.taskDescription}</p>
            <div className='flex justify-between  mt-4'>
                <button className='py-1 px-2 bg-green-600 rounded-sm'>Accept Task</button>
                <button className='py-1 px-2 bg-red-600 rounded-sm'>Reject Task</button>
            </div>

        </div>
  )
}

export default NewTask