import React from 'react'
import { useParams } from 'react-router-dom'
import { useQuery } from '@apollo/client'
import { GET_PROJECT } from '../graphql/projects'
import TaskList from '../components/tasks/TaskList'

export default function ProjectDetails() {

  const params = useParams()
  const {data, loading, error} = useQuery(GET_PROJECT, {
    variables: {
      id: params.id
    },
    skip: !params.id //la primera vez q se ejecuta no obtiene el params entonces busca undefined, con este skip lo saltea la primera vez y desp fx con normaldiad
  })

  if(loading) return <p>Loading...</p>
  if(error) return <p>Error {error}...</p>

  return (
    <>
      <h1>{data.project.name}</h1>
      <p>{data.project.description}</p>
      <button>Delete</button>
    </>
  )
}
