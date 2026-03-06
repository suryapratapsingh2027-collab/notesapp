import React, { useEffect, useState } from 'react'
import { createContext } from 'react'
import { GetLocalStorage, SetLocalStorage } from '../../utils/LocalStorage'

export const AuthContext = createContext()

const AuthProvider = ({ children }) => {

    const [userData, setUserData] = useState({
        employees: [],
        admin: []
    })

    useEffect(() => {
        SetLocalStorage()
        const { employees, admin } = GetLocalStorage()
        setUserData({ employees, admin })
    }, [])
    return (
        <div>
            <AuthContext.Provider value={userData} >
                {children}
            </AuthContext.Provider>
        </div>
    )
}

export default AuthProvider
