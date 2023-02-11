import React from 'react'
import { useQuery } from '@apollo/client' //para hacer peticion fetch
import { GET_PROJECTS } from '../graphql/projects'
import ProjectCard from './ProjectCard'


export default function ProjectList() {

  const { loading, error, data } = useQuery(GET_PROJECTS)

  if(loading) return <h4>Loading...</h4>
  if(error) return <h4>Error {error}</h4>


  return (
    <>
      {
        data.projects.map(p => (
          <ProjectCard
            key={project._id}
            project={p}
          />
        ))
      }
    </>
  )
}
