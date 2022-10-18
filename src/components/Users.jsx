import React from 'react'
import ErrorBoundary from './ErrorBoundary'

const Users = () => {
  return (
    <>
      <ErrorBoundary>
        <div>Users</div>
      </ErrorBoundary>
    </>
  )
}

export default Users
