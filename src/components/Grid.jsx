import React from 'react'
import styled from 'styled-components'

const Grid = ({ header, children }) => (
  <Container>
    <h1>{header}</h1>
    <Content>{children}</Content>
  </Container>
)

export const Container = styled.div`
  margin: 0 auto;
  padding: 0 20px;
  min-height: 100vh ;
  h1 {
    margin: 1.5rem 0;
    font-weight: 500;
  }
`
export const Content = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  grid-gap: 2rem;
`
export default Grid
