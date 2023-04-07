import React from 'react'

export default function Project({ project }) {
  return (
    <div className="project-section">
      <h2 className='project-title'>
        {project.title + " "}
        <a href={project.url} target='blank'>
        <i class="fa-solid fa-up-right-from-square fa-sm"></i>
        </a>
      </h2>
      <div className='project-description'>{project.description}</div>
    </div>
  )
}
