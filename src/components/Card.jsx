import React from 'react'
import styled from 'styled-components'

const Card = ({ image, firstName, lastName, email }) => {
  return (
    <Container>
      <Image src={image} alt='' />
      <Details className='details'>
        <h5>
          {firstName} {lastName}
        </h5>
        <p>{email}</p>
      </Details>
    </Container>
  )
}

export const Container = styled.div`
  width: 100%;
  max-width: 720px;
  border-radius: 10px;
  cursor: pointer;
  position: relative;
  transition: all 0.3s ease-in-out;
  filter: brightness(100%);
  -webkit-filter: brightness(100%);
  &:hover {
    filter: brightness(80%);
    -webkit-filter: brightness(80%);
    transform: scale(1.025);
    .details {
      transform: scale(1);
    }
  }
`
export const Image = styled.img`
  border-radius: 10px;
  object-fit: cover;
  width: 100%;
`
export const Details = styled.div`
  position: absolute;
  bottom: 5%;
  left: 5%;
  color: white;
  padding: 0.1rem;
  transition: all 0.3s linear;
  transform: scale(0);
  z-index: 100;
  font-size: small;
  background:linear-gradient(0deg,rgb(9,9,9) 0%, rgb(9,9,9,0) 100%) ;
  h5 {
    font-size: 1.125rem;
    font-weight: 700;
  }
`
export default Card
