import React from 'react'
import Project from './Project'

export default function ProjectList({ projectGroup }) {
    return (
        <div className='project-list'>
            <h2 className='project-type-styles'>{projectGroup.type}</h2>
            {projectGroup.projects.map(item => <Project key={item.title + item.descripton} project={item} />)}
        </div>
    )
}
