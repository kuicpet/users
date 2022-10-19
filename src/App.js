import React from 'react'
import { Routes, Route } from 'react-router-dom'
import photo from './assets/photo.jpg'
import { Footer, Users, Navbar, NotFound, Hero } from './components'
import { Page2, Page3, Page4, Page5 } from './pages'

const App = () => {
  return (
    <>
      <Navbar />
      <Hero title='All Users' />
      <Routes>
        <Route exact path='/users' element={<Users />}>
          {/*<Route exact path=':page2' element={<Page2 />} />
          <Route exact path=':page3' element={<Page3 />} />
          <Route exact path=':page4' element={<Page4 />} />
  <Route exact path=':page5' element={<Page5 />} />*/}
        </Route>
        <Route path='/*' element={<NotFound />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
