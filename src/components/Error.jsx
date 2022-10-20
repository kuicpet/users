import React from 'react'
import styled from 'styled-components'

const ErrorFallback = ({ error }) => {
  return (
    <Container>
      <Content>
        <p>Something went wrong:</p>
        <pre>{error.message}</pre>
      </Content>
    </Container>
  )
}

export const Container = styled.section`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: center;
  min-height: 75vh;
`
export const Content = styled.div`
  p {
    font-size: 1.5rem;
    font-weight: 200;
    color: black;
    margin: 0.5rem 0;
    @media screen and (max-width: 400px) {
      font-size: 2rem;
    }
  }
  pre {
    color: red;
    text-align: center;
  }
`
export default ErrorFallback
