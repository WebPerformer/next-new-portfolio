import React, { useRef, useEffect } from 'react'

// sections
import Hero from "components/sections/landingSections/Hero"
import About from "components/sections/landingSections/About"
import Services from "components/sections/landingSections/Services"
import Skills from "components/sections/landingSections/Skills"
import Portfolio from "components/sections/landingSections/Portfolio"
import Contact from "components/sections/landingSections/Contact"
import Tabs from "components/sections/portfolioSections/Tabs"

// Context
import { useStateContext } from 'context/StateContext'

// GSAP
import { gsap } from 'gsap'

export default function Main() {

  const { allProjects } = useStateContext()

  let tl = useRef()

  useEffect(() => {
    tl.current = gsap.timeline({ paused: true })
    tl.current.fromTo('.tabs-wrapper', {
      duration: 0,
      "top": "-200%"
    },
    {
      duration: 1,
      "top": "0",
      ease: "power4.inOut"
    }
    )
  }, [])

  useEffect(() => {
    allProjects ? tl.current.play() : tl.current.reverse()
  }, [allProjects])

  return (
    <div className="main-content">
      <Tabs/>
      <Hero/>
      <About/>
      <Services/>
      <Skills/>
      <Portfolio/>
      <Contact/>
    </div>
  )
}