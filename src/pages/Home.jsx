import React from 'react'
import styled from 'styled-components'
import { useNavigate } from 'react-router-dom'

const Home = () => {
  const navigate = useNavigate()
  const handleClick = () => {
    navigate('/users')
  }
  const handleSignIn = () => {
    navigate('/join')
  }
  return (
    <Container>
      <Content>
        <h1>Welcome mate!</h1>
        <h5>Community,Innovation and Learning.</h5>
      </Content>
      <Wrapper>
        <Button type='button' onClick={() => handleClick()}>
          View Users
        </Button>
        <Button type='button' onClick={() => handleSignIn()}>
          Join the Community
        </Button>
      </Wrapper>
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
    text-align: center;
    @media screen and (max-width: 400px) {
      font-size: 3rem;
    }
  }
  h5 {
    color: gray;
    text-align: center;
    font-size: 1.125rem;
    font-weight: 200;
  }
`
export const Wrapper = styled.div`
  display: flex;
  margin: 1rem;
  align-items: center;
  justify-content: center;

  width: 100%;
  @media screen and (max-width: 400px) {
    flex-direction: column;
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
    background-color: rgb(255, 171, 76);
  }
  @media screen and (max-width: 768px) {
    width: 30%;
  }
  @media screen and (max-width: 400px) {
    width: 50%;
  }
`
export default Home
