import React from 'react'
import {motion} from 'framer-motion'
const Projects = () => {
    const projects=[
        {
        id:1,
        title:"E-Commerce Website",
        description:'A moderen e-commerce platform with advances cart functionality',
        image:'pr1.png',
        link:'#',
        tags:['React','Node.js','Mongodb']
        },
        {
            id:2,
            title:"E-Commerce Website",
            description:'A moderen e-commerce platform with advances cart functionality',
            image:'pr2.png',
            link:'#',
            tags:['React Native','Firebase','Redux']
            },
            {
                id:3,
                title:"E-Commerce Website",
                description:'A moderen e-commerce platform with advances cart functionality',
                image:'pr1.png',
                link:'#',
                tags:['React','Node.js','Mongodb']
                },
                {
                    id:4,
                    title:"E-Commerce Website",
                    description:'A moderen e-commerce platform with advances cart functionality',
                    image:'pr1.png',
                    link:'#',
                    tags:['React','Node.js','Mongodb']
                    },
    ]
  return (
    <div>
        <section className='projects-section' id='projects'>
            <h2 className='section-title'>My Projects</h2>
            <div className='projects-grid'>
                {projects.map((project) =>(
                     <motion.div
                     className='project-card'
                     key={project.id}
                     whileHove={{scale:1.05}}
                     whileTap={{scale:0.95}}
                    >
                      <div
                       className='project-image'
                       style={{backgroundImage:`url(${project.image})`}}
                      ></div>
                      <div className='project-content'>
                        <h3  className='project-title'>{project.title}</h3>
                        <p className='project-description'>{project.description}</p>
                        <div className='project-tags'>
                            {project.tags.map((tag,index) =>(
                                <span key={index} className='project-tag'>
                                    {tag}
                                </span>
                            ))}
                        </div>
                        <a href={project.link} className='project-link' target="_blank">View Project</a>
                      </div>
                    </motion.div>
                ))}
            </div>
        </section>
    </div>
  )
}

export default Projects
