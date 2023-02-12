import React, { useState } from 'react'
import CountUp from 'react-countup'
import ScrollTrigger from 'react-scroll-trigger'

// icons
import { AiOutlineHome } from 'react-icons/ai'

function Hero() {

  const [counterOn, setCounterOn] = useState(false)

  return (
    <section className="hero" id='hero'>
      <div className="section-title"><AiOutlineHome/> Introduce</div>
      <div className="hero-wrapper wrapper">
        <div className="big-text">
          <p>Say Hi from <span>Gabriel</span>, <br /> Web Developer & UI/UX Design</p>
        </div>
        <div className="small-text">
          <p className="gray-text">I'm <span>Front-End developer</span> and I love what I do. Take a time and <span>explore my works</span>. Hope you enjoy and don't forget to give a feedback on <span>Linkedin</span>.</p>
        </div>
        <ScrollTrigger onEnter={() => setCounterOn(true)} onExit={() => setCounterOn(false)}>
          <div className="number-counter">
            <div className="number-container">
              <div className="num">{counterOn && <CountUp start={0} end={4} duration={1} delay={0}/>}+</div>
              <p>Years Of Experience</p>
            </div>
            <div className="number-container">
              <div className="num">{counterOn && <CountUp start={0} end={35} duration={1} delay={0}/>}+</div>
              <p>Projects Completed</p>
            </div>
          </div>
        </ScrollTrigger>
      </div>
    </section>
  )
}

export default Hero