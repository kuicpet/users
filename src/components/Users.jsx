import React, { useState, useEffect } from 'react'
//import { Outlet } from 'react-router-dom'
import Card from './Card'
import Grid from './Grid'
import Loader from './Loader'
import Pagination from './Pagination'
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa'
import { HiLocationMarker, HiOutlineMail, HiOutlinePhone } from 'react-icons/hi'
import styled from 'styled-components'
import Modal from './Modal'

const PageSize = 10

const Users = () => {
  const [showModal, setShowModal] = useState(false)
  const [users, setUsers] = useState([])
  const [page, setPage] = useState(1)
  const [loading, setLoading] = useState(false)
  const [user, setUser] = useState({})

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true)
        await fetch(`https://randomuser.me/api/?results=50&seed=abc`)
          .then((res) => res.json())
          .then((data) => {
            console.log(data)
            setUsers(data?.results)
          })
      } catch (error) {
        console.log(error)
      }
      setLoading(false)
    }
    fetchData()
  }, [])

  const getUser = (userId) => {
    const userDetail = users?.find((user) => user.email === userId)
    console.log(user)
    setUser(userDetail)
    setShowModal(true)
    //navigate('/user')
  }

  //const totalUsers = users?.length
  const pageCount = 5
  const steps = page * PageSize - PageSize

  const fname = user?.name?.first
  const lname = user?.name?.last
  const image = user?.picture?.large
  const email = user?.email
  const phone = user?.phone
  const city = user?.location?.city
  const state = user?.location?.state
  const country = user?.location?.country
  const date = user?.registered?.date

  return (
    <>
      {loading && <Loader />}
      <Grid header='All Users'>
        {users.length > 0 ? (
          users
            .slice(steps, steps + PageSize)
            .map((user, i) => (
              <Card
                getUser={() => getUser(user.email)}
                key={i}
                image={user.picture.large}
                firstName={user.name.first}
                lastName={user.name.last}
                email={user.email}
              />
            ))
        ) : (
          <Container>
            <h5>No Users Found!</h5>
          </Container>
        )}
      </Grid>
      {showModal && (
        <Modal onShow={showModal} onClose={() => setShowModal(false)}>
          <img src={image} alt='' />
          <div className='details'>
            <h2 className='name'>
              Hi,I'm {fname} {lname}
            </h2>
            <p>
              <span>
                <HiOutlineMail style={{ color: 'red' }} />
                {email}
              </span>
            </p>
            <h5>
              <span>
                <HiOutlinePhone style={{ color: 'green' }} />
                {phone}
              </span>
            </h5>
            <h5>
              <span>
                <HiLocationMarker style={{ color: 'blue' }} />
                {city},{state}, {country}
              </span>
            </h5>
            <p className='join'>JOINED SINCE: {date.split('', [10])}</p>
          </div>
          <button className='connect'>Connect with {fname}</button>
        </Modal>
      )}

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

export const Container = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  min-height: 65vh;
  width: 100%; ;
`
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
export default Users
