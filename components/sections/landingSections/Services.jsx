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
                    <div className="service-desc">Landing pages with full responsiveness and interactions. Here you will see beautiful websites using the latest technologies of the moment.</div>
                    <div className="service-qty">{data.projects.filter(front => front.type === "front").length} Projects</div>
                </div>
                <div className="card">
                    <div className="service-header">
                        <div className="service-name">Full Stack</div>
                        <div className="service-icon"><HiOutlineCode/></div>
                    </div>
                    <div className="service-desc">Complete and functional websites that uses a full stack development, for real cases and much more.</div>
                    <div className="service-qty">{data.projects.filter(full => full.type === "full").length} Projects</div>
                </div>
                <div className="card">
                    <div className="service-header">
                        <div className="service-name">Creative</div>
                        <div className="service-icon"><BiVector/></div>
                    </div>
                    <div className="service-desc">Some of the creative resources you can interact with. Animations of all types, dimensions and colors! Don't be shy and test every corner of it.</div>
                    <div className="service-qty">{data.projects.filter(creative => creative.type === "creative").length} Projects</div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Services