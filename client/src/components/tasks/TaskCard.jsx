import React from 'react'

export default function TaskCard({ task }) {
  return (
    <div>
      <h1>{task.title}</h1>
      <button>Delete</button>
    </div>
  )
}
