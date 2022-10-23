import React from 'react'
import { Routes, Route } from 'react-router-dom'

import { Footer, Users, Navbar, NotFound, Males, Females } from './components'
import Home from './pages/Home'
import Join from './pages/Join'

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route exact path='/users' element={<Users />} />
        <Route exact path='/males' element={<Males />} />
        <Route exact path='/females' element={<Females />} />
        <Route exact path='/join' element={<Join />} />
        <Route path='/*' element={<NotFound />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
