import React from 'react'
import { Routes, Route } from 'react-router-dom'
import photo from './assets/photo.jpg'
import { Footer, Users, Navbar, NotFound, Males, Females } from './components'

const App = () => {
  return (
    <>
      <Navbar />
      
      <Routes>
        <Route exact path='/users' element={<Users />} />
        <Route exact path='/users/males' element={<Males />} />
        <Route exact path='/users/females' element={<Females />} />
        <Route path='/*' element={<NotFound />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
