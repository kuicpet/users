import React from 'react'
import { Routes, Route } from 'react-router-dom'
import photo from './assets/photo.jpg'
import { Footer, Users, Navbar, NotFound } from './components'

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/users' element={<Users />} />
        <Route path='/*' element={<NotFound />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
