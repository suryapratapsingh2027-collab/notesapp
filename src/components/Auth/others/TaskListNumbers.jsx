import React from 'react'

const TaskListNumbers = ({ data }) => {
    return (
        <div className='screen m-10 flex justify-between gap-5'>
            <div className=' text-white rounded-2xl px-9 py-6 w-[45%] bg-red-500'>
                <h1 className='text-3xl font-medium'>{data.taskCount.newTask}</h1>
                <h1 className='text-2xl font-semibold'>New Task</h1>
            </div>
            <div className=' text-white rounded-2xl px-9 py-6 w-[45%] bg-blue-400'>
                <h1 className='text-3xl font-medium'>{data.taskCount.acceptedTask}</h1>
                <h1 className='text-2xl font-semibold'>Active Task</h1>
            </div>
            <div className=' text-white rounded-2xl px-9 py-6 w-[45%] bg-green-400'>
                <h1 className='text-3xl font-medium'>{data.taskCount.completedTask}</h1>
                <h1 className='text-2xl font-semibold'>Completed Task</h1>
            </div>
            <div className=' text-white rounded-2xl px-9 py-6 w-[45%] bg-yellow-500'>
                <h1 className='text-3xl font-medium'>{data.taskCount.failedTask}</h1>
                <h1 className='text-2xl font-semibold'>Failed Task</h1>
            </div>
        </div>
    )
}

export default TaskListNumbers
