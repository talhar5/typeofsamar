import React, { useEffect, useState } from 'react'
import Project from './Project';
import projectsData from './projectsData.json'
export default function Projects() {

  let [projects, setProjects] = useState([]);
  
  useEffect(() => {
    setProjects(projectsData.projects);
  }, [])

  return (
    <div className=''>
      <h1>Projects</h1>
      {projects.map(item => <Project key={item + Date.now()} project={item} />)}
    </div>
  )
}
