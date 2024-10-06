import React from 'react'
import Auth from '../components/RegComp/Auth'
import Navbar from '../components/Navbar'
import Reg from '../components/RegComp/Reg'
import Footer from '../components/Home/Footer/Footer'

const Register = () => {
  return (
    <div>
      <Navbar />
      <Auth type="signin" />
    </div>
  )
}

export default Register
