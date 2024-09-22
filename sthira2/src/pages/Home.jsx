import React from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Home/Hero/Hero'
import About from '../components/Home/About/About'
import Review from '../components/Home/Review/Review'
import Footer from '../components/Home/Footer/Footer'
import Blogs from '../components/Home/Blogs/Blogs'
import Disorders from '../components/Home/Disorders/Disorders'

const Home = () => {
  return (
    <>
    <Navbar/>
    <Hero/>
    <Disorders/>
   <About/>
   <Review/>
   <Blogs/>
   <Footer/>
    </>
  )
}

export default Home
