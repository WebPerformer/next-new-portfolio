import React, { useRef, useEffect } from 'react'
import Link from 'next/link'

// context
import { useStateContext } from 'context/StateContext'

// icons
import { FaGripLines } from 'react-icons/fa'
import { AiOutlineHome, AiOutlineUser, AiOutlineCode, AiOutlineAim } from 'react-icons/ai'
import { BsBriefcase, BsGrid3X3Gap, BsEnvelope } from 'react-icons/bs'
import { MdOutlineClose } from 'react-icons/md'

// gsap
import { gsap } from 'gsap'

function RightNav() {

    // CIRCLE MENU
    const circleRef = useRef(null)

    // GSAP MENU ANIMATION
    const { menuRef, navRef, menu, setMenu } = useStateContext()

    let tl = useRef()

    useEffect(() => {
        tl.current = gsap.timeline({ paused: true })
        tl.current.fromTo('.columns', {
            duration: 0,
            "clip-path": "polygon(0 0, 0 0, 0 100%, 0% 100%)"
        },
        {
            duration: 2,
            "clip-path": "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
            ease: "power4.inOut"
        }
        )
    }, [])
    
    useEffect(() => {
        if(!menu){
        setTimeout(() => {
            menuRef.current.style.display = "none"
            navRef.current.style.display = "grid"
        }, 2000)
        } else {
            menuRef.current.style.display = "block"
            navRef.current.style.display = "none"
        }
        menu ? tl.current.play() : tl.current.reverse()
    }, [menu])

    const handleCircle = () => {
        setMenu(!menu)
        circleRef.current.style.pointerEvents = "none"
        setTimeout(() => {
            circleRef.current.style.pointerEvents = "all"
        }, 2000)
    }

    return (
        <div className="right-nav">
            <div className="wrapper-menu">
                <div className="menu-circle" ref={circleRef} onClick={() => handleCircle()}>
                    {menu ? <MdOutlineClose/> : <FaGripLines/>}
                </div>
            </div>
            <div className="float-nav" ref={navRef}>
                <Link href="/" className="hero active">
                    <AiOutlineHome/>
                </Link>
                <Link href="#about" className="about">
                    <AiOutlineUser/>
                </Link>
                <Link href="#services" className="services">
                    <AiOutlineCode/>
                </Link>
                <Link href="#skills" className="skills">
                    <AiOutlineAim/>
                </Link>
                <Link href="#portfolio" className="portfolio">
                    <BsGrid3X3Gap/>
                </Link>
                <Link href="#contact" className="contact">
                    <BsEnvelope/>
                </Link>
            </div>
        </div>
    )
}

export default RightNav