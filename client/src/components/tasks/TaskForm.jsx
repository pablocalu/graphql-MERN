import React from 'react'

export default function TaskForm() {

    const handleSubmit = (e) => {
        e.preventDefault()
    }

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name='title' />
      <button>Add</button>
    </form>
  )
}
