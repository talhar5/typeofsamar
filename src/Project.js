import React from 'react'

export default function Project({ project }) {
  return (
    <>
    <h2>{project.title}</h2>
    <div>{project.description}</div>
    </>
  )
}
