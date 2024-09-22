import React from 'react'
import {BrowserRouter,Routes,Route} from "react-router-dom"
import Home from './pages/Home'
import About from './pages/About'
import Community from './pages/Chat'
import Account from './pages/Account'
import Chatbot from './components/Chatbot/Chatbot'
import Login from './pages/Login'
import Register from './pages/Register'
import Anx from './pages/Anx'
import BecksDep from './pages/BecksDep'
import Eating from './pages/Eating'
import SleepPage from './pages/SleepPage'
import ImagePage from './pages/ImagePage'

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/home' element={<Home/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/community' element={<Community/>}/>
          <Route path='/account' element={<Account/>}/>
          <Route path='/Chatbot' element={<Chatbot/>}/>
          <Route path='/Login' element={<Login/>}/>
          <Route path='/Register' element={<Register/>}/>
          <Route path='/Anx' element={<Anx/>}/>
          <Route path='/BecksDep' element={<BecksDep/>}/>
          <Route path='/Eating' element={<Eating/>}/>
          <Route path='/SleepPage' element={<SleepPage/>}/>
          <Route path='/ImagePage' element={<ImagePage/>}/>
          </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
