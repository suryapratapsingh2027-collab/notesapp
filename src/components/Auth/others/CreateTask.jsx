import React from 'react'

const CreateTask = ({ data }) => {
    return (
        <div className='bg-[#303030] h-120 w-full p-5'>
            <form className='text-xl text-gray-300 h-full w-full flex justify-between'>
                <div className='w-[40%] p-5'>
                    <h3>Task Title</h3>
                    <input className='w-full p-3 border-2 border-gray-300 rounded-sm outline-0 mb-3' type="text" placeholder='Make a UI Design' />
                    <h3>Date</h3>
                    <input className='w-full p-3 border-2 border-gray-300 rounded-sm outline-0 mb-3' type="date" />
                    <h3>Assin To</h3>
                    <input className='w-full p-3 border-2 border-gray-300 rounded-sm outline-0 mb-3' type="text" placeholder='Employe Name' />
                    <h3>Catagory</h3>
                    <input className='w-full p-3 border-2 border-gray-300 rounded-sm outline-0 mb-3' type="text" placeholder='Design, Dev, etc' />
                </div>
                <div className='w-[40%]'>
                    <h3>Description</h3>
                    <textarea className='w-full p-3 h-50 border-2 border-gray-300 rounded-sm outline-0 mb-3' name=""></textarea>
                    <button className='bg-cyan-700 px-6 py-3 w-full rounded-sm font-semibold'>Create Task</button>
                </div>
            </form>
        </div>
    )
}

export default CreateTask
