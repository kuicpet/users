import React from 'react'
import styled from 'styled-components'

const Button = ({ text, handleClick }) => {
  return (
    <Container type='button' onClick={handleClick}>
      {text}
    </Container>
  )
}

export const Container = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: white;
  border: 2px solid black;
  outline: none;
  padding: 1rem;
  text-transform: uppercase;
  //width: 10%;
  height: 2.5rem;
  font-size: 1.5rem;
  //min-width: 5rem;
  border-radius: 4px;
  color: black;
  transition: all 0.3s;
  cursor: pointer;
  :hover {
    background-color: black;
    color: white;
  }
`
export default Button
