import React from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Home/Hero/Hero'
import About from '../components/Home/About/About'
import Review from '../components/Home/Review/Review'
import Footer from '../components/Home/Footer/Footer'
import Blogs from '../components/Home/Blogs/Blogs'
import FAQ from '../components/Home/questions/FAQ'
import Work from '../components/Home/working/Work'

const Home = () => {
  return (
    <>
    <Navbar/>
    <Hero/>
   <About/>
   <Work/>
   <Review/>
   <Blogs/>
   <FAQ/>
   <Footer/>
    </>
  )
}

export default Home
