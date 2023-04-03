import React, { useEffect, useState } from 'react'
import projectsData from './projectsData.json';
import ProjectList from './projectsList';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDiagramProject } from '@fortawesome/free-solid-svg-icons';

export default function Projects() {

  let [projects, setProjects] = useState([]);
  let [isLoading, setIsLoading] = useState(true);
  let [isError, setIsError] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    setProjects(projectsData);
    console.log(projectsData);
    setIsLoading(false);
    setIsError(false);
  }, [])

  return (
    <div className=''>
      <h1 className='personal-projects'>
        <FontAwesomeIcon icon={faDiagramProject} size="ms" />
        {" Personal Projects"}
      </h1>
      {isLoading && <div className='loading'>Loading...</div>}
      {isError && <div className='error'>Error occured</div>}
      {!isLoading && <ProjectList projectGroup={projects.reactjs} />}
      {!isLoading && <ProjectList projectGroup={projects.htmlcss} />}
      {!isLoading && <ProjectList projectGroup={projects.vanilla} />}
    </div>
  )
}
