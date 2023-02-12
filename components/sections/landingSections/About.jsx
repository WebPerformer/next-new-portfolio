import React from 'react'

// icons
import { AiOutlineUser } from 'react-icons/ai'

function About() {
  return (
    <section className="about" id='about'>
        <div className="section-title"><AiOutlineUser/> About</div>
        <div className="about-wrapper wrapper">
            <h5>My name is Gabriel Silva Araujo. I'm here to show you all of <span>my projects</span> and my evolution has a programmer.</h5>
            <p className="gray-text">Graduated in <span>Computer Science</span> from Universidade Paulista, with extensive experience in <span>Front-End</span> development, specializing in applications using Javascript and improving my knowledge in <span>React.js</span> and <span>Next.js</span> Frameworks.</p>
        </div>
    </section>
  )
}

export default About