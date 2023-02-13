
import React, { useState } from 'react'
import { useMutation } from '@apollo/client'
import { CREATE_PROJECT } from '../graphql/projects'

export default function ProjectForm() {

  const [project, setProject ] = useState({
    name: '',
    description: ''
  })

  const [createProject, { loading, error, data }] = useMutation(CREATE_PROJECT)

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
      <input type="text" name='name' placeholder='Write a title...' onChange={handleChange} />
      <textarea name='description' rows="3" placeholder='Write a description..' onChange={handleChange} ></textarea>
      <button disabled={!project.name || !project.description || loading}>
        Submit
      </button>
    </form>
  )
}
