import React from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Home/Hero/Hero'
import About from '../components/Home/About/About'
import Review from '../components/Home/Review/Review'
import Footer from '../components/Home/Footer/Footer'
import Blogs from '../components/Home/Blogs/Blogs'
import Disorders from '../components/Home/Disorders/Disorders'
import BodyImage from '../components/Home/Forms/BodyImage'
import Anxiety from '../components/Home/Anxiety_form/Anxiety'
import Dep from '../components/Home/Dep_form/Dep'

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
   <BodyImage/>
   <Anxiety/>
   <Dep/>
    </>
  )
}

export default Home
