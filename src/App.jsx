import React, { useEffect, useState } from 'react'
import Login from './components/Auth/Login'
import EmployeDasboard from './components/Auth/Dashboard/EmployeDasboard'
import AdminDashboard from './components/Auth/Dashboard/AdminDashboard'
import { GetLocalStorage, SetLocalStorage } from './utils/LocalStorage'
import { useContext } from 'react'
import { AuthContext } from './components/context/AuthProvider'

const App = () => {

  const [user, setUser] = useState(null)
  const [logginUserData, setLoginUserData] = useState(null)
  const AuthData = useContext(AuthContext)

  const handleLogin = (email, password) => {
    if (email === 'admin@example.com' && password === '123') {
      setUser({ role: 'admin' })
      localStorage.setItem('loggInUser', JSON.stringify({ role: 'admin' }))
    } else if (AuthData) {
      const employee = AuthData.employees.find((e) => email === e.email && password === e.password)
      if (employee) {
        setUser({ role: 'employee' })
        setLoginUserData(employee)
        localStorage.setItem('loggInUser', JSON.stringify({ role: 'employee' }))
      }
    } else {
      alert('Invalid email')
    }
  }

  return (
    <>
      {!user ? <Login handleLogin={handleLogin} /> : ''}
      {user?.role === 'admin' ? <AdminDashboard data={AuthData} /> : (user?.role === 'employee' ? <EmployeDasboard data={logginUserData} /> : null)}
      {/* {<EmployeDasboard />} */}
    </>
  )
}

export default App
