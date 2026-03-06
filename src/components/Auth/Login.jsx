import React, { useState } from 'react'

const Login = ({ handleLogin }) => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const SubmitHandler = (e) => {
        e.preventDefault()
        handleLogin(email, password)
        setEmail("")
        setPassword("")

    }

    return (
        <div className='h-screen w-screen bg-black flex items-center justify-center'>
            <div className='border-2 border-emerald-600 p-20 flex rounded-xl items-center justify-center'>
                <form onSubmit={(e) => {
                    SubmitHandler(e)
                }} className='flex flex-col  items-center p-5 justify-center gap-5'>

                    <input value={email} onChange={(e) => {
                        setEmail(e.target.value)

                    }} className='border-2 text-white text-2xl border-emerald-600 outline-0 rounded-full px-10 py-3 placeholder:text-white ' type="email" placeholder='Enter Your Email' />

                    <input value={password} onChange={(e) => {

                        setPassword(e.target.value)

                    }} className='border-2 text-white text-2xl border-emerald-600 outline-0 rounded-full px-10 py-3 placeholder:text-white ' type="password" placeholder='Enter Password' />
                    <button className=' active:scale-95 cursor-pointer text-white text-2xl bg-emerald-600 rounded-full px-10 w-full font-bold py-3 placeholder:text-white '>Login</button>
                </form>
            </div>
        </div>
    )
}

export default Login
