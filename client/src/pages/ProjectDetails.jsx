import React from 'react'
import { useParams } from 'react-router-dom'
import { useQuery } from '@apollo/client'
import { GET_PROJECT } from '../graphql/projects'

export default function ProjectDetails() {

  const params = useParams()
  const {data, loading, error} = useQuery(GET_PROJECT, {
    variables: {
      id: params.id
    }
  })

  return (
    <div>
      <h1>Projects Details</h1>
    </div>
  )
}
