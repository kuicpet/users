import React from 'react'
import styled from 'styled-components'
import { useNavigate } from 'react-router-dom'

const Home = () => {
    const navigate = useNavigate()
    const handleClick = () => {
        navigate('/users')
    }
  return (
    <Container>
      <Content>
        <h1>Welcome mate!</h1>
        <h5>We have been expecting you</h5>
      </Content>
      <Button type='button' onClick={() => handleClick()}>View Users</Button>
    </Container>
  )
}

export const Container = styled.div`
  position: relative;
  display: flex;
  width: 100%;
  min-height: 75vh;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`
export const Content = styled.section`
  h1 {
    font-size: 4.5rem;
    font-weight: 200;
    margin: 0.5rem 0;
    @media screen and (max-width: 400px) {
      font-size: 3rem;
    }
  }
  h5 {
    color: gray;
    text-align: center;
  }
`
export const Button = styled.button`
  width: 15%;
  margin: 1rem;
  height: 2.5rem;
  border: 2px solid black;
  outline: none;
  border-radius: 10px;
  font-weight: 400;
  font-size: 1.125rem;
  background-color: transparent;
  cursor: pointer;
  left: -4px;
  top: -4px;
  z-index: 2;
  box-shadow: 4px 4px black;
  transition: 0.1s ease-in-out;
  &:hover {
    transform: translateY(4px);
    box-shadow: 0 0 0;
  }
  @media screen and (max-width: 768px) {
    width: 30%;
  }
  @media screen and (max-width: 400px) {
    width: 50%;
  }
`
export default Home
