import React from 'react'
import {motion} from 'framer-motion' 
import { FaEnvelope, FaMapMarkedAlt, FaPhone } from 'react-icons/fa'
const Contact = () => {
  return (
    <div>
      <section className='contact-section' id="contact">
        <motion.h2
          className='section-title'
          initial={{opacity:0}}
          whileInView={{opacity:1}}
          viewPort={{once:true}}
          transition={{duration:0.5}}
        >Contact Me</motion.h2>
        <div className='contact-cards-container'>
            <motion.div
              className='contact-card'
              initial={{opacity:0,y:-50}}
              whileInView={{opacity:1,y:0}}
              viewPort={{once:true}}
              transition={{duration:0.6}}
            >
                <FaMapMarkedAlt className='contact-icon'/>
                <h3>Location</h3>
                <p>New York,USA</p>
            </motion.div>
            <motion.div
              className='contact-card'
              initial={{opacity:0,y:-50}}
              whileInView={{opacity:1,y:0}}
              viewPort={{once:true}}
              transition={{duration:0.6}}
            >
                <FaEnvelope className='contact-icon'/>
                <h3>Location</h3>
                <p>abc@gmail.com</p>
            </motion.div>
            <motion.div
              className='contact-card'
              initial={{opacity:0,y:-50}}
              whileInView={{opacity:1,y:0}}
              viewPort={{once:true}}
              transition={{duration:0.6}}
            >
                <FaPhone className='contact-icon'/>
                <h3>Phone</h3>
                <p>+123 456 7890</p>
            </motion.div>
        </div>
        <motion.div
         className='contact-form-container'
         initial={{opacity:0}}
         whileInView={{opacity:1}}
         viewPort={{once:true}}
         transition={{duration:0.8}}
        >
         <h3 className='form-title'>Drop a Message</h3>
         <form>
            <div className='form-group'>
                <input type="text" placeholder='Your Name'></input>
            </div>
            <div className='form-group'>
                <input type="email" placeholder='Your Email'></input>
            </div>
            <div className='form-group'>
                <textarea type="text" placeholder='Your Name'></textarea>
            </div>
            <motion.button
              className='send-button'
              type="submit"
              whileHover={{scale:1.1}}
              whileTap={{scale:0.05}}
            >Send Message</motion.button>
         </form>

        </motion.div>
      </section>
    </div>
  )
}

export default Contact
