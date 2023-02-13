
import React, { useState } from 'react'
import { useMutation } from '@apollo/client'

export default function ProjectForm() {

  const [project, setProject ] = useState({
    name: '',
    description: ''
  })

  const handleChange = (e) => {
    setProject({
      ...project,
      [e.target.name]: e.target.value
    })
  }
  const handleSubmit = (e) => {
    e.preventDefault()

  }

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name='name' placeholder='Write a title' onChange={handleChange} />
      <textarea name='description' rows="3" placeholder='Write a description' onChange={handleChange} ></textarea>
      <button>
        Submit
      </button>
    </form>
  )
}
