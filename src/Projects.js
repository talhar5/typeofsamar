import React, { useEffect, useState } from 'react'
import projectsData from './projectsData.json';
import ProjectList from './projectsList';

export default function Projects() {

  let [projects, setProjects] = useState([]);
  let [isLoading, setIsLoading] = useState(true);
  let [isError, setIsError] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    setProjects(projectsData);
    setIsLoading(false);
    setIsError(false);
  }, [])

  return (
    <div className=''>
      <h1 className='personal-projects-heading'>
        <i class="fa-solid fa-diagram-project fa-sm"></i>
        {" Personal Projects"}
      </h1>
      {isLoading && <div className='loading'>Loading...</div>}
      {isError && <div className='error'>Error occured</div>}
      {!isLoading && <ProjectList projectGroup={projects.reactjs} />}
      {!isLoading && <ProjectList projectGroup={projects.vanilla} />}
      {!isLoading && <ProjectList projectGroup={projects.htmlcss} />}
    </div>
  )
}

