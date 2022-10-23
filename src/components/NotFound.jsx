import React from 'react'
import styled from 'styled-components'
import { Link, useNavigate } from 'react-router-dom'

const NotFound = () => {
  const navigate = useNavigate()

  const handleClick = () => {
    navigate('/')
  }
  return (
    <Container>
      <Content>
        <h1>Oops!</h1>
        <h5>We can't seem to find the page you're looking for.</h5>
        <p>Error code: 404</p>
        <button type='button' onClick={() => handleClick()}>
          Home
        </button>
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
    font-weight: 200;
  }
  h5 {
    color: gray;
    margin: 0.25rem 0;
  }
  p {
    color: red;
    margin-bottom: 1rem;
  }
  button {
    color: black;
    padding: 0.25rem 2.5rem;
    border: 2px solid black;
    border-radius: 8px;
    font-weight: 400;
    font-size: 1.125rem;
    background-color: rgb(255, 171, 76);
    cursor: pointer;
    left: -2px;
    top: -2px;
    z-index: 2;
    box-shadow: 2px 2px black;
    transition: 0.1s ease-in-out;
    &:hover {
      transform: translateY(2px);
      box-shadow: 0 0 0;
    }
  }
`
export default NotFound
