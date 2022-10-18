import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import Card from './Card'
import Grid from './Grid'
import Loader from './Loader'

const Home = () => {
  const [users, setUsers] = useState([])
  const [page, setPage] = useState(1)
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true)
        await fetch(
          `https://randomuser.me/api/?page=${page}&results=10&seed=abc`
        )
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

  return (
    <>
      <Grid header='All Users'>
        {users.length > 0 &&
          users.map((user, i) => (
            <Card
              key={i}
              image={user.picture.large}
              firstName={user.name.first}
              lastName={user.name.last}
              email={user.email}
            />
          ))}
      </Grid>
      {loading && <Loader />}
    </>
  )
}

export default Home
