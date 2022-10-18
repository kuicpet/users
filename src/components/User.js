import React from 'react'
import ErrorBoundary from './ErrorBoundary'

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
