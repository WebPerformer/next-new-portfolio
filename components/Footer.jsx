import React from 'react'
import Link from 'next/link'

// Icons
import { GrLinkedinOption } from 'react-icons/gr'
import { FaGithub } from 'react-icons/fa'
import { SiWhatsapp } from 'react-icons/si'

function Footer() {
  return (
    <footer className="footer">
        <div className="footer-wrapper">
            <div className="footer-icons">
                <Link target='_blank' href="http://linkedin.com/in/webperformer">
                    <GrLinkedinOption/>
                </Link>
                <Link target='_blank' href="http://github.com/WebPerformer">
                    <FaGithub/>
                </Link>
                <Link target='_blank' href="https://wa.me/qr/7SDYDWOS3CGRN1">
                    <SiWhatsapp/>
                </Link>
            </div>
            <div className="footer-copy">© 2023 <span>Gabriel</span>. All Rights Reserved.</div>
            <div className="footer-dev">Developed By <span>Gabriel</span></div>
        </div>
    </footer>
  )
}

export default Footer