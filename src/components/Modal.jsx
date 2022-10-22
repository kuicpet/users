import React from 'react'
import styled from 'styled-components'

const Modal = ({ children, onShow, onClose }) => {
  return (
    <Container>
      <Wrapper>
        <Content>
          <Button onClick={onClose}>&times;</Button>
          {children}
        </Content>
      </Wrapper>
    </Container>
  )
}

export const Container = styled.div`
  width: 100%;
  height: auto;
  background-color: rgba(0, 0, 0, 0.5);
  position: fixed;
  display: flex;
  align-items: center;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 150;
`

export const Wrapper = styled.div`
  width: 50%;
  height: 80%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  background-color: #fff;
  border-radius: 10px;
  padding: 0.75rem;
  @media screen and (max-width: 768px) {
    width: 80%;
  }
`

export const Content = styled.div`
  position: relative;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  width: 100%;
  height: 100%;
  padding: 3rem 0;
  @media screen and (max-width: 400px) {
    grid-template-columns: repeat(1,1fr)
  }
  .connect {
    font-size: 1.125rem;
    border: 2px solid black;
    background-color: white;
    height: 34px;
    margin-top: 1rem;
    cursor: pointer;
    right: -2px;
    top: -2px;
    z-index: 2;
    border-radius: 8px;
    box-shadow: 2px 2px black;
    transition: 0.1s ease-in-out;
    &:hover {
      transform: translateY(4px);
      box-shadow: 0 0 0;
      background-color: #caff04;
    }
  }
  h2 {
    font-weight: 200;
  }
  h5 {
    margin: 1rem 0;
    font-weight: 100;
    span {
      display: flex;
      align-items: center;
      svg {
        font-size: 1.5rem;
        margin-right: 0.5rem;
      }
    }
  }
  img {
    object-fit: cover ;
    width: 100%;
    border-radius: 8px;
  }
  p {
    color: gray;
    span {
      display: flex;
      align-items: center;
      //justify-content: space-between;
      svg {
        font-size: 1.5rem;
        margin-right: 0.5rem;
      }
    }
  }

  .details {
    margin: 0.5rem;
    .join {
      margin-top: 1.25rem;
      text-align: center;
      border: none;
      padding: 0.25rem 0.15rem;
      color: black;
      background-color: #e4e5ff;
      border-radius: 50px;
    }
  }
  .name {
    margin: 1rem 0;
  }
`

export const Button = styled.button`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 2px solid black;
  width: 2.5rem;
  height: 2.5rem;
  font-size: 2rem;
  border-radius: 8px;
  background-color: white;
  font-weight: 200;
  top: 0;
  right: 0;
  outline: none;
  cursor: pointer;
  right: -2px;
  top: -2px;
  z-index: 2;
  box-shadow: 2px 2px black;
  transition: 0.1s ease-in-out;
  &:hover {
    transform: translateY(4px);
    box-shadow: 0 0 0;
  }
`
export default Modal
