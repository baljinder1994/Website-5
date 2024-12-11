import React from 'react'
import { FaFacebook, FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa'

const Footer = () => {
  return (
    
      <footer className='footer'>
        <div className='footer-container'>
            <div className='footer-logo'>
                <h2>Logo</h2>
                <p>Crafting creativity with passion.</p>
            </div>
            
        

        <div className='footer-links'>
            <h3>Quick Links</h3>
            <ul>
                <li><a href="#home">Home</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#skills">Skills</a></li>
                <li><a href="#projects">Projects</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>
        </div>

        <div className='footer-socials'>
            <h3>Follow Me</h3>
            <div className='social-icons'>
                <a href='https://facebook.com' target='_blank'><FaFacebook/></a>
                <a href='https://facebook.com' target='_blank'><FaInstagram/></a>
                <a href='https://facebook.com' target='_blank'><FaLinkedin/></a>
                <a href='https://facebook.com' target='_blank'><FaGithub/></a>
            </div>
        </div>
        </div>

        <div className='footer-bottom'>
            <p>&copy; Logo. All Rights reserved.</p>
        </div>
      </footer>
  
  )
}

export default Footer
