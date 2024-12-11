import React from 'react'
import {motion} from 'framer-motion'
import { FaAward, FaLaptopCode, FaUserFriends } from 'react-icons/fa'
const About = () => {
  return (
    <div>
      <section id='about' className='about-section' >
        <motion.div
          className='about-content'
          initial={{opacity:0,y:50}}
          animate={{opacity:1,y:0}}
          transition={{duration:1}}
        >
          <h2 className='about-title'>About Us</h2>
          <p className='about-description'>
          Hi, I'm <span className="highlight"> Baljinder Kaur</span>, a passionate web developer with a knack for creating stunning websites and applications. 
          I specialize in modern web technologies and love crafting digital experiences that are visually appealing and functional.
       
          </p>
          <div className='about-stats'>
            <div className='stat-card'>
                <FaAward className='stat-icon'/>
                <h3>5+ Yrars</h3>
                <p>Experience</p>
            </div>

            <div className='stat-card'>
                <FaLaptopCode className='stat-icon'/>
                <h3>50+ Projects</h3>
                <p>Completed</p>
            </div>
            <div className='stat-card'>
                <FaUserFriends className='stat-icon'/>
                <h3>100+</h3>
                <p>Clients</p>
            </div>
          </div>
        </motion.div>
      </section>
    </div>
  )
}

export default About
