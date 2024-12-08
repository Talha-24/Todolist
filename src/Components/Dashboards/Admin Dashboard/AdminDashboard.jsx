import React from 'react'
import Header from '../../Header/Header'
import CreateTask from './AdminDashComponents/CreateTask'
import AdminHeader from '../../Header/AdminHeader'

const AdminDashboard = (propse) => {
  return (
    <div className='p-10 '>
      <AdminHeader loggedInUser={propse.loggedInUser} />
        <CreateTask/>
    </div>
  )
}

export default AdminDashboard