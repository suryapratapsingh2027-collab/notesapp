import React from 'react'
import Header from '../others/Header'
import CreateTask from '../others/CreateTask'

const AdminDashboard = ({ data }) => {

    return (
        <div className='h-screen w-full bg-[#1C1C1C] p-10'>
            <Header data={data.admin} />
            <CreateTask data={data} />
        </div>
    )
}

export default AdminDashboard
