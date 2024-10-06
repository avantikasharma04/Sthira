import React from 'react'
import Auth from '../components/RegComp/Auth'
import Log from '../components/LoginComp/Log'
import Navbar from '../components/Navbar'

const Login = () => {
  return (
    <div>
      <Navbar />
      <Auth type="signup" />
    </div>
  )
}

export default Login
