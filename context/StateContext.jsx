import React, { createContext, useContext, useRef, useState } from "react"

const Context = createContext()

export const StateContext = ({ children }) => {

    const menuRef = useRef(null)
    const navRef = useRef(null)
    const [menu, setMenu] = useState(false)
    const [allProjects, setAllProjects] = useState(false)

    return (
        <Context.Provider
            value={{
                menuRef,
                navRef,
                menu,
                setMenu,
                allProjects,
                setAllProjects,
            }}
        >
            {children}
        </Context.Provider>
    )
}

export const useStateContext = () => useContext(Context)