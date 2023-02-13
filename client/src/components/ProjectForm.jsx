
import React, { useState } from 'react'
import { useMutation } from '@apollo/client'
import { CREATE_PROJECT, GET_PROJECTS } from '../graphql/projects'

export default function ProjectForm() {

  const [project, setProject ] = useState({
    name: '',
    description: ''
  })


  //creo la funcion para usar la mutacion, le paso un objeto con el query de traer projectos para q me actualice solo el dom
  const [createProject, { loading, error, data }] = useMutation(CREATE_PROJECT,  {
    refetchQueries: [
      {
        query: GET_PROJECTS
      },
      'GetProjects'
    ]
  })

  const handleChange = (e) => {
    setProject({
      ...project,
      [e.target.name]: e.target.value
    })
  }
  const handleSubmit = (e) => {
    e.preventDefault()
    createProject({
      variables: {
        name: project.name,
        description: project.description
      }
    })
  }

  return (
    <form onSubmit={handleSubmit}>
      {error && <p>{error.message}</p>}
      <input type="text" name='name' placeholder='Write a title' onChange={handleChange} />
      <textarea name='description' rows="3" placeholder='Write a description' onChange={handleChange} ></textarea>
      <button disabled={!project.name || !project.description || loading}>
        Submit
      </button>
    </form>
  )
}
