import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <Container>
      <Link to={`/users`}>All Users</Link>
    </Container>
  )
}

export const Container = styled.nav`
  display: flex;
  width: 100%;
  align-items: center;
  padding: 1.5rem;
  border-bottom: 2px solid black;
`
export default Navbar
