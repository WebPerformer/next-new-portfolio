import React, { useState } from 'react'
import CountUp from 'react-countup'
import ScrollTrigger from 'react-scroll-trigger'

// icons
import { AiOutlineAim, AiFillHtml5 } from 'react-icons/ai'
import { CgFigma } from 'react-icons/cg'
import { DiCss3, DiJavascript1, DiReact, DiNodejsSmall } from 'react-icons/di'
import { SiNextdotjs, SiExpress, SiMongodb, SiJest } from 'react-icons/si'

function Skills() {

    const [counterOn, setCounterOn] = useState(false)

    return (
        <section className="skills" id="skills">
            <div className="section-title"><AiOutlineAim/> Skills</div>
            <div className="skills-wrapper wrapper">
                <h5>My <span>Advantages</span></h5>
                <ScrollTrigger onEnter={() => setCounterOn(true)} onExit={() => setCounterOn(false)}>
                    <div className="skills-cards">
                        <div className="skills-card">
                            <div className="circle">
                                <div className="icon"><CgFigma/></div>
                            </div>
                            <div className="name">Figma</div>
                        </div>
                        <div className="skills-card">
                            <div className="circle">
                                <div className="icon"><AiFillHtml5/></div>
                            </div>
                            <div className="name">HTML</div>
                        </div>
                        <div className="skills-card">
                            <div className="circle">
                                <div className="icon"><DiCss3/></div>
                            </div>
                            <div className="name">CSS</div>
                        </div>
                        <div className="skills-card">
                            <div className="circle">
                                <div className="icon"><DiJavascript1/></div>
                            </div>
                            <div className="name">Javascript</div>
                        </div>
                        <div className="skills-card">
                            <div className="circle">
                                <div className="icon"><DiReact/></div>
                            </div>
                            <div className="name">React.js</div>
                        </div>
                        <div className="skills-card">
                            <div className="circle">
                                <div className="icon"><SiNextdotjs/></div>
                            </div>
                            <div className="name">Next.js</div>
                        </div>
                        <div className="skills-card">
                            <div className="circle">
                                <div className="icon"><DiNodejsSmall/></div>
                            </div>
                            <div className="name">Node.js</div>
                        </div>
                        <div className="skills-card">
                            <div className="circle">
                                <div className="icon"><SiExpress/></div>
                            </div>
                            <div className="name">Express</div>
                        </div>
                        <div className="skills-card">
                            <div className="circle">
                                <div className="icon"><SiMongodb/></div>
                            </div>
                            <div className="name">MongoDB</div>
                        </div>
                        <div className="skills-card">
                            <div className="circle">
                                <div className="icon"><SiJest/></div>
                            </div>
                            <div className="name">Jest</div>
                        </div>
                    </div>
                </ScrollTrigger>
            </div>
        </section>
    )
}

export default Skills