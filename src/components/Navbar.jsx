import React from 'react'
import styled from 'styled-components'
import { NavLink } from 'react-router-dom'
import { AiFillHome } from 'react-icons/ai'

const Navbar = () => {
  return (
    <Container>
      <div>
        <NavLink to='/'>
          <AiFillHome />
        </NavLink>
      </div>
      <ul>
        <li>
          <NavLink
            to={`/users`}
            style={({ isActive }) => ({
              color: isActive ? 'black' : 'lightgray',
            })}>
            All Users
          </NavLink>
        </li>
        <li>
          <NavLink
            to={`/males`}
            style={({ isActive }) => ({
              color: isActive ? 'black' : 'lightgray',
            })}>
            Males
          </NavLink>
        </li>
        <li>
          <NavLink
            to={`/females`}
            style={({ isActive }) => ({
              color: isActive ? 'black' : 'lightgray',
            })}>
            Females
          </NavLink>
        </li>
      </ul>
    </Container>
  )
}

export const Container = styled.nav`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: space-between;
  padding: 1rem;
  border-bottom: 2px solid black;
  div {
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.5rem;
    margin: 0 1rem;
    a {
      color: #9d0a5d;
    }
  }
  ul {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 25%;
    font-size: 1rem;
    font-weight: 400;
    list-style: none;
    @media screen and (max-width: 768px) {
      width: 50%;
    }
    @media screen and (max-width: 400px) {
      width: 100%;
    }
    li {
      a {
        text-decoration: none;
        :hover {
          color: black;
        }
      }
    }
  }
`
export default Navbar
