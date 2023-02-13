import React from 'react'
import TaskCard from './TaskCard'

export default function TaskList({ tasks }) {

  return (
    <>
      {tasks.map(task => (
        <TaskCard/>
      ))}
    </>
  )
}
