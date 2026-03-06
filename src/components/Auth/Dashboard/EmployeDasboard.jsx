import React from 'react'
import Header from '../others/Header'
import TaskListNumbers from '../others/TaskListNumbers'
import TaskList from '../TaskList/TaskList'

const EmployeDasboard = ({ data }) => {
    return (
        <div className='h-screen bg-[#1C1C1C]'>
            <Header data={data} />
            <TaskListNumbers data={data} />
            <TaskList data={data} />
        </div>
    )
}

export default EmployeDasboard
