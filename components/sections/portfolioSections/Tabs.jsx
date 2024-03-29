import React, { useState } from 'react'
import Link from 'next/link'

// Icons
import { HiArrowTopRightOnSquare } from 'react-icons/hi2'
import { MdOutlineClose } from 'react-icons/md'
import { FaGithub } from 'react-icons/fa'

// Projects
import { data } from '../../../public/json/projects.js'

// Context
import { useStateContext } from 'context/StateContext'

function Tabs() {

    const { setAllProjects } = useStateContext()
    const [tabs, setTabs] = useState(0)

    return (
        <section className="tabs-wrapper">
            <div className="tabs-menu">
                <div className={tabs === 0 ? "tab tab-front active" : "tab tab-front"} onClick={() => setTabs(0)}>Front End <span>{data.projects.filter(front => front.type === "front").length}</span></div>
                <div className={tabs === 1 ? "tab tab-full active" : "tab tab-full"} onClick={() => setTabs(1)}>Full Stack <span>{data.projects.filter(full => full.type === "full").length}</span></div>
                <div className={tabs === 2 ? "tab tab-creative active" : "tab tab-creative"} onClick={() => setTabs(2)}>Creative <span>{data.projects.filter(creative => creative.type === "creative").length}</span></div>
            </div>
            {tabs == 0 && 
                <div className="tab-content">
                    {data.projects.filter(front => front.type === "front").map((project, index) => {
                        return (
                            <div className="portfolio-card" key={index}>
                                <Link target="_blank" href={project.link}>
                                    <div className="view-site"><FaGithub/></div>
                                </Link>
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
                                        <Link target="_blank" href={project.site}>
                                            <div className="right"><HiArrowTopRightOnSquare/></div>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>
            }
            {tabs == 1 && 
                <div className="tab-content">
                    {data.projects.filter(full => full.type === "full").map((project, index) => {
                        return (
                            <div className="portfolio-card" key={index}>
                                <Link target="_blank" href={project.link}>
                                    <div className="view-site"><FaGithub/></div>
                                </Link>
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
                                        <Link target="_blank" href={project.site}>
                                            <div className="right"><HiArrowTopRightOnSquare/></div>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>
            }
            {tabs == 2 && 
                <div className="tab-content">
                    {data.projects.filter(creative => creative.type === "creative").map((project, index) => {
                        return (
                            <div className="portfolio-card" key={index}>
                                <Link target="_blank" href={project.link}>
                                    <div className="view-site"><FaGithub/></div>
                                </Link>
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
                                        <Link target="_blank" href={project.site}>
                                            <div className="right"><HiArrowTopRightOnSquare/></div>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>
            }
            <div className="tab-close" onClick={() => setAllProjects(false)}><MdOutlineClose/></div>
        </section>
    )
}

export default Tabs