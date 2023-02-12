import React from 'react'

// icons
import { AiOutlineUser } from 'react-icons/ai'

function About() {
  return (
    <section className="about" id='about'>
        <div className="section-title"><AiOutlineUser/> About</div>
        <div className="about-wrapper wrapper">
            <h5>My name is Gabriel Silva Araujo. I'm here to show you all of <span>my projects</span> and my evolution has a programmer.</h5>
            <p className="gray-text">I am a freelancer based in the Brazil and i have been building noteworthy UX/UI designs and websites for years, which comply with the latest design trends. I help convert a vision and an idea into meaningful and useful products. Having a sharp eye for product evolution helps me prioritize tasks, iterate fast and deliver faster.</p>
        </div>
    </section>
  )
}

export default About