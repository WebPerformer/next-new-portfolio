import React, { createContext, useContext, useRef, useState } from "react"
import { data } from '../public/json/projects'

const Context = createContext()

export const StateContext = ({ children }) => {

    const menuRef = useRef(null)
    const navRef = useRef(null)
    const [menu, setMenu] = useState(false)
    const [allProjects, setAllProjects] = useState(false)
<<<<<<< HEAD
    const [totalProjects, setTotalProjects] = useState(data.projects.length)
=======
    const [totalProjects, setTotalProjects] = useState(data.length)
>>>>>>> ddf06bba326455b38242213ccbed245f844d00e1

    return (
        <Context.Provider
            value={{
                menuRef,
                navRef,
                menu,
                setMenu,
                allProjects,
                setAllProjects,
                totalProjects,
                setTotalProjects,
            }}
        >
            {children}
        </Context.Provider>
    )
}

export const useStateContext = () => useContext(Context)
