import React from 'react'
import styled from 'styled-components'

const Grid = ({ children }) => (
  <Container>
    <Content>{children}</Content>
  </Container>
)

export const Container = styled.div`
  margin: 0 auto;
  padding: 0 20px;
  //min-height: 100vh;
 
`
export const Content = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  grid-gap: 2rem;
`
export default Grid
