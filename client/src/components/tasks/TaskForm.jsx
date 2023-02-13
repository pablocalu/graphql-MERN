import React from 'react'
import { CREATE_TASK } from '../../graphql/tasks'
import { useMutation } from '@apollo/client'
import { useParams } from 'react-router-dom'


export default function TaskForm() {

    const [createTask] = useMutation(CREATE_TASK, {
        refetchQueries: ['getProject']
    })
    const params = useParams()

    const handleSubmit = async (e) => {
        e.preventDefault()
        await createTask({
            variable: {
                title: e.target.title.value,
                projectId: params.id
            }
        })
        e.target.reset()
        e.target.title.focus()
    }

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name='title' />
      <button>Add</button>
    </form>
  )
}
