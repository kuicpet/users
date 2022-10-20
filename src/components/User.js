import React from 'react'
import ErrorBoundary from './Error'

const User = () => {
  return (
    <>
      <ErrorBoundary>
        <div>User</div>
      </ErrorBoundary>
    </>
  )
}

export default User
