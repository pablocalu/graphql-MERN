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
      <input type="text" name='name' placeholder='Write a title' onChange={handleChange} />
      <textarea name='description' rows="3" placeholder='Write a description' onChange={handleChange} ></textarea>
      <button>
        Submit
      </button>
    </form>
  )
}
