import React from 'react'
import styled from 'styled-components'

const Hero = ({ title }) => {
  return (
    <Container>
      <h1>{title}</h1>
    </Container>
  )
}

export const Container = styled.section`
  display: flex;
  width: 100%;
  align-items: center;
  padding: 0 2rem ;
  //justify-content: center;
  h1 {
    margin: 1.5rem 0;
    font-weight: 500;
  }
`
export default Hero
