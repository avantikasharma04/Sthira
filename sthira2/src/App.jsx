import React from 'react'
import {BrowserRouter,Routes,Route} from "react-router-dom"
import Home from './pages/Home'
import About from './pages/About'
import Community from './pages/Community'
import Account from './pages/Account'

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/community' element={<Community/>}/>
          <Route path='/account' element={<Account/>}/>
          </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
