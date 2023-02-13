import React from 'react'
import { CREATE_TASK } from '../../graphql/tasks'
import { useMutation } from '@apollo/client'
import { useParams } from 'react-router-dom'


export default function TaskForm() {

    const [createTask] = useMutation(CREATE_TASK)
    const params = useParams()

    const handleSubmit = (e) => {
        e.preventDefault()
        createTask({
            variable: {
                title: e.target.title.value,
                projectId: params.id
            }
        })
    }

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name='title' />
      <button>Add</button>
    </form>
  )
}
