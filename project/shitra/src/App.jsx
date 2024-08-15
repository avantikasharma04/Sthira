import React from 'react'
import Nav from './components/Nav'
import Home from './components/Home'
import Disorders from './components/Disorders'
import About from './components/About'
import Blogs from './components/Blogs'
import Review from './components/Review'
import Footer from './components/Footer'

const App = () => {
  return (
    <div>
      <Nav />
      <main>
        <div id='home'>
          <Home />
        </div>

        <div id='disorders'>
          <Disorders />
        </div>

        <div id='about'>
          <About/>
        </div>

        <div>
          <Review/>
        </div>

        <div>
          <Blogs/>
        </div>

        <div>
         < Footer/>
        </div>
      </main>
    </div>
  )
}

export default App
