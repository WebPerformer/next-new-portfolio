import React, { useEffect, useRef } from 'react'
import Head from 'next/head'

// components
import LeftCard from './LeftCard'
import RightNav from './RightNav'
import Menu from './Menu'
import Footer from './Footer'

// Context
import { useStateContext } from 'context/StateContext'

function Layout({ children }) {

  const { allProjects } = useStateContext()

  const layoutRef = useRef(null)

  useEffect(() => {
    allProjects ? document.body.style.overflowY = "hidden" : document.body.style.overflowY = "auto"
  }, [allProjects])

  return (
    <div className="layout" ref={layoutRef}>
        <Head>
          <title>Gabriel Silva Araujo</title>
        </Head>
        <header>
          <Menu/>
        </header>
        <main className="main-container">
          <LeftCard/>
          {children}
          <RightNav/>
        </main>
        <footer>
          <Footer/>
        </footer>
    </div>
  )
}

export default Layout