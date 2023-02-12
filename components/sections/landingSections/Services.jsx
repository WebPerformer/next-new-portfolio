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
                        <div className="service-name">Websites</div>
                        <div className="service-icon"><FaReact/></div>
                    </div>
                    <div className="service-desc">I produce websites that increase my knowledge. Like this one.</div>
                    <div className="service-qty">{data.projects.filter(web => web.type === "web").length} Projects</div>
                </div>
                <div className="card">
                    <div className="service-header">
                        <div className="service-name">Development</div>
                        <div className="service-icon"><HiOutlineCode/></div>
                    </div>
                    <div className="service-desc">Codes I used a lot. In the development section you will find some logic codes that really help me.</div>
                    <div className="service-qty">{data.projects.filter(dev => dev.type === "dev").length} Projects</div>
                </div>
                <div className="card">
                    <div className="service-header">
                        <div className="service-name">Components</div>
                        <div className="service-icon"><BiVector/></div>
                    </div>
                    <div className="service-desc">One of the most important things on this website. Here are some stylized items to help me to speed up my projects.</div>
                    <div className="service-qty">{data.projects.filter(component => component.type === "component").length} Projects</div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Services