import React from 'react'
import { ApolloClient } from '@apollo/client'

const client = new ApolloClient({
  uri: 'http://localhost:4000/graphql'
})

function App() {
  return (
    <div>
      aqui va un componente
    </div>
  )
}

export default App
