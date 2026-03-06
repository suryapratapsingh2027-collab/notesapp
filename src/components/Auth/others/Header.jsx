import React from 'react'

const Header = ({ data }) => {
    console.log(data)
    const logOutUser = () => {
        localStorage.setItem("loggInUser", '')
        window.location.reload()
    }
    return (
        <div className='p-10 text-white flex items-end justify-between'>
            <h1 className='text-2xl font-medium '>Hello <br /><span className='text-3xl font-semibold'> {data.name} 👋</span></h1>
            <button onClick={logOutUser} className='bg-red-500 text-xl text-white font-medium px-5 py-3 rounded-xl'>Log out</button>
        </div>
    )
}

export default Header
