import React from 'react'
import Link from 'next/link'

// icons
import { BsGrid3X3Gap } from 'react-icons/bs'
import { HiArrowTopRightOnSquare } from 'react-icons/hi2'

// Projects
import { data } from '../../../public/json/projects.js'

// Context
import { useStateContext } from 'context/StateContext'

function Portfolio() {

    const { setAllProjects } = useStateContext()

    return (
        <section className="portfolio" id="portfolio">
            <div className="section-title"><BsGrid3X3Gap/> Portfolio</div>
            <div className="portfolio-wrapper wrapper">
                <h5>Featured <span>Projects</span></h5>
                <div className="portfolio-grid">
                    {data.projects.slice(0, 6).map((project, index) => {
                        return (
                            <div className="portfolio-card" key={index}>
                                <img src={project.image} alt=""/>
                                <div className="project-infos">
                                    <div className="info">
                                        <div className="left">
                                            <div className="project-name">{project.name}</div>
                                            <div className="project-categories">
                                                {project.categories.slice(0, 3).map((categorie, index) => {
                                                    return <p key={index}>{categorie}</p>
                                                })}
                                            </div>
                                        </div>
                                        <Link target="_blank" href={project.link}>
                                            <div className="right"><HiArrowTopRightOnSquare/></div>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>
                <div className="portfolio-footer">
                    <button className="portfolio-button" onClick={() => setAllProjects(true)}>All Projetcs</button>
                    <div className="total">
                        PROJECTS COMPLETED: <span>{data.projects.length - 5}</span>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Portfolio