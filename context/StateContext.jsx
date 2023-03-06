import React, { createContext, useContext, useRef, useState } from "react"
import { data } from '../public/json/projects'

const Context = createContext()

export const StateContext = ({ children }) => {

    const menuRef = useRef(null)
    const navRef = useRef(null)
    const [menu, setMenu] = useState(false)
    const [allProjects, setAllProjects] = useState(false)
    const [totalProjects, setTotalProjects] = useState()

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
