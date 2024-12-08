import React, { useContext, useEffect } from 'react'
import { DataSender } from '../Context API/AuthContext'

const AdminHeader = (propse) => {
   


   
        const Logoutbtn=()=>{
          const logout=localStorage.getItem("Employee");
          propse.loggedInUser('');
        

        }
  

    
    
    
  return (
    <div className='p-10 bg-[#1C1C1C] flex items-end justify-between border-[1px] border-purple-600 '>
        <h1  className='text-2xl text-white font-semibold'>Hello <br /> <span className='text-4xl text-white font-bold'>Talha(CEO)!👋</span></h1>
        <button onClick={()=>{Logoutbtn()}}   className='bg-purple-600 py-3 px-4 text-xl font-medium text-white rounded-sm'>Log Out</button>
    </div>
  )
}

export default AdminHeader