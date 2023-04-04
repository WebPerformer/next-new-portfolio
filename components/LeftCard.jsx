import React from 'react'
import Link from 'next/link'

// icons
import { FaLinkedinIn, FaGithub, FaWhatsapp } from 'react-icons/fa'
import { HiOutlineArrowTopRightOnSquare } from 'react-icons/hi2'

function LeftCard() {
  return (
    <div className="left-card">
        <div className="card">
            <img src="/images/me.jpg" alt="" />
            <div className="my-name">Gabriel Silva Araujo</div>
            <div className="my-skills">Web Developer & UI/UX Design</div>
            <div className="social-icons">
                <Link target='_blank' href="https://www.linkedin.com/in/mystgabriel/">
                    <div className="social-circle">
                        <FaLinkedinIn/>
                    </div>
                </Link>
                <Link target='_blank' href="http://github.com/WebPerformer">
                    <div className="social-circle">
                        <FaGithub/>
                    </div>
                </Link>
                <Link target='_blank' href="https://api.whatsapp.com/send?phone=5511915657659">
                    <div className="social-circle">
                        <FaWhatsapp/>
                    </div>
                </Link>
            </div>
            <div className="email-link">
                <Link href="mailto:webperformerz@gmail.com">webperformerz@gmail.com <HiOutlineArrowTopRightOnSquare/></Link>
            </div>
            <Link target='_blank' href="./cv/resume.pdf" download="Gabriel Silva Araujo - CV" className="btn">
                <button className="cv-download">Download CV</button>
            </Link>
            <div className="card-copyright">© 2023 <Link href="/"><span>Gabriel</span></Link>. All Rights Reserved.</div>
        </div>
    </div>
  )
}

export default LeftCard
