import React from 'react'
import { FaCss3Alt, FaGitAlt, FaHtml5, FaJs, FaNodeJs, FaReact } from 'react-icons/fa'
import {motion} from 'framer-motion'

const Skills = () => {
    const skills=[
        {name:'HTML',icon:<FaHtml5/>,color:'#E34F26'},
        {name:'CSS',icon:<FaCss3Alt/>,color:'#1572B6'},
        {name:'Javascript',icon:<FaJs/>,color:'#F7DF1E'},
        {name:'React',icon:<FaReact/>,color:'#61DAFB'},
        {name:'Node.js',icon:<FaNodeJs/>,color:'#339933'},
        {name:'Git',icon:<FaGitAlt/>,color:'#F05032'},


    ]
  return (
    <div>
      <section className='skills-section' id='skills'>
        <motion.div
          className='skills-content'
          initial={{opacity:0}}
          animate={{opacity:1}}
          transition={{duration:1}}
        
        
        >
         <h2 className='skills-title'>My Skills</h2>
         <p className='skills-description'>
            Hee are some pof the tools and technologies I specialize in to nuild stunning digital experiences
         </p>
         <div className='skills-grid'>
            {skills.map((skill,index) =>(
                <motion.div
                  className='skill-card'
                  key={index}
                  style={{
                    borderColor:skill.color,
                    boxShadow:`0 0 20px ${skill.color}, 0 0 40px ${skill.color}`
                  }}
                  whileHover={{
                    scale:1.1,
                    boxShadow:`0 4px 10px rgba(0,0,0,0.1)`
                  }}
                >
                    <div className='skill-icon' style={{color:skill.color}}>{skill.icon}</div>
                    <h3 className='skill-name'>{skill.name}</h3>
                </motion.div>
            ))}
         </div>

        </motion.div>
      </section>
    </div>
  )
}

export default Skills
