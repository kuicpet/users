import React from 'react'
import styled from 'styled-components'

const Pagination = ({ children }) => {
  return <Container>{children}</Container>
}

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 25%;
  @media screen and (max-width: 1400px) {
    width: 100%;
  }
  @media screen and (min-width: 800px) {
    width: 50%;
  }
`
export default Pagination
