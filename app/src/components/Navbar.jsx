import React from 'react'
import {motion} from 'framer-motion'
const Navbar = () => {
  return (
    <div>
       <motion.nav
        className='navbar'
        initial={{y:-100,opacity:0}}
        animate={{y:0,opacity:1}}
        transition={{duration:0.5}}
       >
         <div className='navbar-container'>
            <div className='logo'>
                <h1>Logo</h1>
            </div>
            <ul className='nav-links'>
                <li>
                    <motion.div
                     whileHover={{scale:1.1}}
                     whilteTap={{scale:0.95}}
                     className='nav-item'
                    >
                     Home
                    </motion.div>
                </li>
                <li>
                    <motion.div
                     whileHover={{scale:1.1}}
                     whilteTap={{scale:0.95}}
                     className='nav-item'
                    >
                     About
                    </motion.div>
                </li>
                <li>
                    <motion.div
                     whileHover={{scale:1.1}}
                     whilteTap={{scale:0.95}}
                     className='nav-item'
                    >
                     Skills
                    </motion.div>
                </li>
                <li>
                    <motion.div
                     whileHover={{scale:1.1}}
                     whilteTap={{scale:0.95}}
                     className='nav-item'
                    >
                     Projects
                    </motion.div>
                </li>
                <li>
                    <motion.div
                     whileHover={{scale:1.1}}
                     whilteTap={{scale:0.95}}
                     className='nav-item'
                    >
                     Contact
                    </motion.div>
                </li>
            </ul>
         </div>
       </motion.nav>
    </div>
  )
}

export default Navbar
