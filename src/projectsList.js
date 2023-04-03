import React from 'react'
import Project from './Project'

export default function ProjectList({ projectGroup }) {
    return (
        <>
            <h2>{projectGroup.type}</h2>
            {projectGroup.projects.map(item => <Project key={item.title + item.descripton} project={item} />)}
        </>
    )
}
