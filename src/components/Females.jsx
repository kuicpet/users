import React, { useState, useEffect, useMemo } from 'react'
import { Outlet } from 'react-router-dom'
import Card from './Card'
import Grid from './Grid'
import Loader from './Loader'
import Pagination from './Pagination'
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa'
import styled from 'styled-components'

const PageSize = 10

const Females = () => {
  const [users, setUsers] = useState([])
  const [page, setPage] = useState(1)
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true)
        await fetch(`https://randomuser.me/api/?gender=female&results=50`)
          .then((res) => res.json())
          .then((data) => {
            // console.log(data)
            setUsers(data?.results)
          })
      } catch (error) {
        console.log(error)
      }
      setLoading(false)
    }
    fetchData()
  }, [])

  const totalUsers = users?.length
  const pageCount = 5
  const steps = page * PageSize - PageSize

  return (
    <>
      {loading && <Loader />}
      <Grid header='female Users'>
        {users.length > 0 ? (
          users
            .slice(steps, steps + PageSize)
            .map((user, i) => (
              <Card
                key={i}
                image={user.picture.large}
                firstName={user.name.first}
                lastName={user.name.last}
                email={user.email}
              />
            ))
        ) : (
          <h5>No Users</h5>
        )}
      </Grid>
      {users && users.length > 0 && (
        <Wrapper>
          <Pagination>
            <Button
              disabled={page <= 1}
              onClick={() => setPage((prev) => prev - 1)}>
              <FaChevronLeft />
            </Button>
            {Array.from({ length: pageCount }, (value, i) => i + 1).map(
              (item) => (
                <Button onClick={() => setPage(item)}>{item}</Button>
              )
            )}
            <Button
              disabled={page >= pageCount}
              aria-disabled={page >= pageCount}
              onClick={() => setPage((prev) => prev + 1)}>
              <FaChevronRight />
            </Button>
          </Pagination>
        </Wrapper>
      )}
    </>
  )
}

export const Wrapper = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: flex-end;
  padding: 0 1rem;
  margin: 2rem 0;
`
export const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  border: 2px solid black;
  font-size: 1.25rem;
  font-weight: 200;
  width: 2rem;
  height: 2rem;
  background: white;
  border-radius: 6px;
  outline: none;
  cursor: pointer;

  :hover {
    background-color: green;
    color: white;
  }
  :focus {
    background-color: green;
    color: white;
  }
  :disabled {
    background-color: lightgray;
    cursor: not-allowed;
    color: black;
  }
`
export default Females
