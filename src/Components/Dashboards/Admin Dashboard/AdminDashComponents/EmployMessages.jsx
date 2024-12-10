import React, { useContext } from 'react'
import { DataSender } from '../../../Context API/AuthContext'

const EmployMessages = (propse) => {
    const [user,setUser]=useContext(DataSender);
    console.log(user);
    return (
        <div className='  mt-1 border-[1px] px-10 border-purple-600  '>
        <div className='flex justify-between mt-5  border-yellow-600'>
            <h3 className='w-1/2 font-medium text-3xl'>Name</h3>
            <p className='w-1/2 font-medium text-3xl'>Message </p>
        </div>
        {user.map((element)=>{
   
    

            
            return(
                <div className='flex justify-between py-2   mt-2'>
                <h3 className='w-1/2  text-xl'>{element.firstName}</h3>
                <p className='w-1/2 text-xl'>{element.taskmsg[0]} </p>
            </div>

            )
        })}
        
    </div>
  )
}

export default EmployMessages