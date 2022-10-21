import React from 'react'
import styled from 'styled-components'
import { useParams } from 'react-router-dom'

const User = () => {
  const { user } = useParams()
  return (
    <>
      <Container>
        <Wrapper />
        {user && <h1>{user.first}</h1>}
        <Wrapper />
      </Container>
    </>
  )
}

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
  justify-content: center;
`
export const Wrapper = styled.section`
  display: flex;
  width: 50%;
`
export default User
