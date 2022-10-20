import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const NotFound = () => {
  return (
    <Container>
      <Content>
        <h1>Oops!</h1>
        <h5>We can't seem to find the page you're looking for.</h5>
        <p>Error code: 404</p>
        <Link to='/'>
          Back Home
        </Link>
      </Content>
    </Container>
  )
}

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  min-height: 75vh;
`
export const Content = styled.div`
  h1 {
    font-size: 4.5rem;
    margin: 1rem 0;
    font-weight: 200 ;
  }
  h5 {
    color: gray;
    margin: 0.25rem 0;
  }
  p {
    color: red;
    margin-bottom: 1rem ;
  }
`
export default NotFound
