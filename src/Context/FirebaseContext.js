import {createContext, useState} from 'react'

export const firebaseContext = createContext(null)
export const authContext = createContext(null)

export function UserContext({children}) {
    const [user, setUser] = useState(null)

    return (
        <authContext.Provider value={{user,setUser}}>
            {children}
        </authContext.Provider>
    )

}