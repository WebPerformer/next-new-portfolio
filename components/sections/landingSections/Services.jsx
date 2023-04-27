import React from 'react'

// icons
import { AiOutlineCode } from 'react-icons/ai'
import { FaReact } from 'react-icons/fa'
import { HiOutlineCode } from 'react-icons/hi'
import { BiVector } from 'react-icons/bi'

// Projects
import { data } from '../../../public/json/projects.js'

function Services() {
  return (
    <section className="services" id="services">
        <div className="section-title"><AiOutlineCode/> Services</div>
        <div className="services-wrapper wrapper">
            <h5>My <span>Specializations</span></h5>
            <div className="services-cards">
                <div className="card">
                    <div className="service-header">
                        <div className="service-name">Front End</div>
                        <div className="service-icon"><FaReact/></div>
                    </div>
                    <div className="service-desc">I produce websites that increase my knowledge. Like this one.</div>
                    <div className="service-qty">{data.projects.filter(front => front.type === "front").length} Projects</div>
                </div>
                <div className="card">
                    <div className="service-header">
                        <div className="service-name">Full Stack</div>
                        <div className="service-icon"><HiOutlineCode/></div>
                    </div>
                    <div className="service-desc">Some animation styles. In the animation section you'll find  very cool stuffs about Greensock features.</div>
                    <div className="service-qty">{data.projects.filter(full => full.type === "full").length} Projects</div>
                </div>
                <div className="card">
                    <div className="service-header">
                        <div className="service-name">Creative</div>
                        <div className="service-icon"><BiVector/></div>
                    </div>
                    <div className="service-desc">One of the most important things on this website. Here are some stylized items to help me to speed up my projects.</div>
                    <div className="service-qty">{data.projects.filter(creative => creative.type === "creative").length} Projects</div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Services