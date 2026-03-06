import React from 'react'

const FailedTask = ({ data }) => {
    return (
        <div className='h-full shrink-0 w-[30%] bg-red-400 rounded-2xl flex flex-col justify-between p-5'>
            <div className='flex justify-between p-5 text-white'>
                <h1 className='text-xl px-3 py-1 font-medium bg-red-600 rounded-xs'>{data.category}</h1>
                <p className='font-medium'>{data.date}</p>
            </div>
            <div className='p-5 text-white'>
                <h1 className='text-3xl font-medium'>{data.title}</h1>
                <p className='mt-4 text-xl'>{data.description}</p>
            </div>
            <div className='mt-5 flex justify-center'>
                <button className='bg-red-500 text-white cursor-pointer px-4 py-2 rounded font-semibold'>Complete</button>
            </div>
        </div>
    )
}

export default FailedTask
