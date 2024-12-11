import React from 'react'
import {motion} from 'framer-motion'
import {FaFacebook, FaGithub, FaInstagram, FaLinkedin} from 'react-icons/fa'
const Home = () => {
  return (
    <div>
      <section id="Home" className='hero-section'>
        <motion.div
          className='hero-left'
          initial={{x:'-100%'}}
          animate={{x:0}}
          transition={{duration:1}}
        >
            <h1 className='hero-title'>
                Hello,I'm <span className='highlight'>Baljinder Kaur</span>
            </h1>
            <h2 className='profession'>Web Developer & Designer</h2>
            <p className='hero-description'>I create stunning websites and applications. Let's work together to build something amazing.</p>
             <div className='hero-buttons'>
                <button className='hero-btn primary-btn'>View My Work</button>
                <button className='hero-btn secondary-btn'>Contact Me</button>
             </div>
             <div className='social-links'>
                <a href='#' className='social-icon'><FaFacebook/></a>
                <a href='#' className='social-icon'><FaInstagram/></a>
                <a href='#' className='social-icon'><FaLinkedin/></a>
                <a href='#' className='social-icon'><FaGithub/></a>
             </div>
        </motion.div>

        <motion.div
          className='hero-right'
          initial={{x:'100%'}}
          animate={{x:0}}
          transition={{duration:1}}
        >
            <img src="baby.jpg" className='hero-image'></img>
        </motion.div>
      </section>
    </div>
  )
}

export default Home
