import React from 'react'
import styled from 'styled-components'

const Join = () => {
  return (
    <Container>
      <Wrapper>
        <div>
          <h1>Join the Community</h1>
        </div>
        <div>
          <form>
            <div>
              <label></label>
              <input placeholder='Firstname' type='text' />
            </div>
            <div>
              <label></label>
              <input placeholder='Lastname' type='text' />
            </div>
            <div>
              <label></label>
              <input placeholder='Email' type='email' />
            </div>
            <div>
              <label></label>
              <input placeholder='Password' type='password' />
            </div>
            <div>
              <label></label>
              <input placeholder='Confirm Password' type='password' />
            </div>

            <div>
              <button type='button'>Sign up</button>
            </div>
          </form>
        </div>
      </Wrapper>
    </Container>
  )
}

export const Container = styled.section`
  display: flex;
  justify-content: center;
  width: 100%;
  min-height: 75vh;
  margin: 1rem 0;
  @media screen and (max-width: 400px) {
    min-height: 80vh;
    align-items: center;
  }
`
export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  //justify-content: center;
  padding: 1rem;
  border: 2px solid black;
  border-radius: 10px;
  background-color: rgb(252, 208, 0);
  width: 30%;
  @media screen and (max-width: 768px) {
    width: 60%;
  }
  @media screen and (max-width: 400px) {
    width: 90%;
  }
  h1 {
    font-weight: 400;
    color: black;
  }
  form {
    width: 100%;
    margin: 1rem 0;
    padding: 1rem;
    input {
      width: 100%;
      height: 2rem;
      border: 2px solid black;
      border-radius: 4px;
      padding: 0 0.5rem;
      font-size: 1rem;
      margin: 0.25rem 0;
      outline: none;
    }
    button {
      width: 100%;
      margin: 1rem 0;
      border: 2px solid black;
      background-color: black;
      font-size: 1.125rem;
      border-radius: 4px;
      color: white;
      padding: 0.5rem 0;
      cursor: pointer;
      left: -4px;
      top: -4px;
      z-index: 2;
      transition: 0.1s ease-in-out;
      :hover {
        background-color: white;
        color: black;
      }
      :active {
        transform: translateY(4px);
      }
    }
  }
`
export default Join
