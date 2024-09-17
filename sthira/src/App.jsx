import React from 'react'
import {BrowserRouter,Routes,Route} from "react-router-dom"
import Home from './pages/Home'
import About from './pages/About'
import Account from './pages/Account'
import Anxietypage from './pages/Anxietypage'
import Chat from './pages/Chat'
import Image from './pages/Image'
import BecksDep from './pages/BecksDep'
import Botpage from './pages/Botpage'
import Eating from './pages/Eating'
import Sleepp from './pages/Sleepp'
import Login from './pages/Login'
import Register from './pages/Register'

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/Home' element={<Home/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/chat' element={<Chat/>}/>
          <Route path='/account' element={<Account/>}/>
          <Route path='/Anxietypage' element={<Anxietypage/>}/>
          <Route path='/Image' element={<Image/>}/>
          <Route path='/BecksDep' element={<BecksDep/>}/>
          <Route path='/Botpage' element={<Botpage/>}/>
          <Route path='/Eating' element={<Eating/>}/>
          <Route path='/Sleepp' element={<Sleepp/>}/>
          <Route path='/Login' element={<Login/>}/>
          <Route path='/Register' element={<Register/>}/>
          </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
