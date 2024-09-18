import React from 'react'
import Navbar from '../components/Navbar'
import Communities from '../components/Community/Communites'
import Footer from '../components/Home/Footer/Footer'
import MyChat from '../components/Community/MyChat'


const Chat = () => {
  return (
    <>
      <Navbar/>
      <Communities/>
      <MyChat/>
     <Footer/>
    </>
  )
}

export default Chat
