import React, { useState } from 'react'

// icons
import { BsEnvelope } from 'react-icons/bs'
import { AiOutlineCheckCircle } from 'react-icons/ai'

function Contact() {

  const [success, setSuccess] = useState(false)

  const successFunc = () => {
    setSuccess(true)

    setTimeout(() => {
      setSuccess(false)
    }, 2500)
  }

  return (
    <section className="contact" id="contact">
        <div className="section-title"><BsEnvelope/> Contact</div>
        <div className="contact-wrapper wrapper">
            {success ? 
            <div className="success-modal">
              <div className="success-icon"><AiOutlineCheckCircle/></div>
              <div className="success-message">Email Successfully Sent</div>
              <button className="success-btn" onClick={() => setSuccess(false)}>
                <span>CLOSE</span>
              </button>
            </div> : null}
            <h5>Let's Work <span>Together!</span></h5>
            <p className="contact-email">webperformerz@gmail.com</p>
            <form action="https://api.staticforms.xyz/submit" method='POST'>
              <input type="hidden" name='accessKey' value="de471f1f-2321-4edb-89fc-7d249ed3b768"/>
              <input type="hidden" name="redirectTo" value="localhost:3000/"/>
              <div className="input-header">
                <div className="input-box">
                  <input type="text" name='name' required="required"/>
                  <span>First Name</span>
                </div>
                <div className="input-box">
                  <input type="text" name='name' required="required"/>
                  <span>Last Name</span>
                </div>
              </div>
              <div className="input-box">
                <input type="text" name='subject' required="required"/>
                <span>Subject</span>
              </div>
              <div className="input-box">
                <textarea type="text" name='message' required="required" className="message"/>
                <span>Message</span>
              </div>
              <button className="btn" type='submit' onClick={() => successFunc()}>
                <span>Send Message</span>
              </button>
            </form>
        </div>
    </section>
  )
}

export default Contact