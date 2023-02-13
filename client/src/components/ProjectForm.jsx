import React, { useState } from 'react'

export default function ProjectForm() {

  const [project, setProject ] = useState({
    title: '',
    description: ''
  })

  const handleChange = (e) => {
    setProject({
      ...project,
      [e.target.name]: e.target.value
    })
  }

  return (
    <form>
      <input type="text" name='name' placeholder='Write a title' />
      <textarea name='description' rows="3" placeholder='Write a description' ></textarea>
      <button>
        Submit
      </button>
    </form>
  )
}
