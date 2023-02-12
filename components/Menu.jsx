import React, { useEffect } from 'react'
import Link from 'next/link'

// context
import { useStateContext } from 'context/StateContext'

function Menu() {
    const { menuRef, setMenu } = useStateContext()

    useEffect(() => {
        const sections = document.querySelectorAll('section')
        const navLink = document.querySelectorAll('a')

        window.addEventListener('scroll', () => {
            let current = ''

            sections.forEach(section => {
                const sectionTop = section.offsetTop

                if(pageYOffset >= sectionTop - 40){
                    current = section.getAttribute('id')
                }
            })

            navLink.forEach(list => {
                list.classList.remove('active')
                if(list.classList.contains(current)){
                    list.classList.add('active')
                }
            })
        })
    }, [])

    return (
        <div className="menu" ref={menuRef}>
            <div className="columns column-1"></div>
            <div className="columns column-2">
                <div className="menu-list">
                    <div className="links">
                        <Link href="/" className="hero active" onClick={() => setMenu(false)}>Home</Link>
                        <Link href="#about" className="about" onClick={() => setMenu(false)}>About</Link>
                        <Link href="#services" className="services" onClick={() => setMenu(false)}>Services</Link>
                        <Link href="#skills" className="skills" onClick={() => setMenu(false)}>Skills</Link>
                        <Link href="#portfolio" className="portfolio" onClick={() => setMenu(false)}>Portfolio</Link>
                        <Link href="#contact" className="contact" onClick={() => setMenu(false)}>Contact</Link>
                    </div>
                </div>
            </div>
            <div className="columns column-3"></div>
            <div className="columns column-4">
                <div className="my-infos">
                    <div className="info-container">
                        <h3>Phone</h3>
                        <p>+55 11 91565-7659</p>
                    </div>
                    <div className="info-container">
                        <h3>Email</h3>
                        <p>webperformerz@gmail.com</p>
                    </div>
                    <div className="info-container">
                        <h3>Address</h3>
                        <p>Brazil, São Paulo - SP</p>
                    </div>
                    <div className="info-container">
                        <h3>Coded by Gabriel</h3>
                        <p>©Copyright 2023. All rights reserved</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Menu