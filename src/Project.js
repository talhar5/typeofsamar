import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';
export default function Project({ project }) {
  return (
    <div className="project-section">
      <h2>
        {project.title + " "}
        <a href={project.url} target='blank'>
          <FontAwesomeIcon icon={faUpRightFromSquare} size="sm" />
        </a>
      </h2>
      <div>{project.description}</div>
    </div>
  )
}
