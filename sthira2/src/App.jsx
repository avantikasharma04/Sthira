import React from 'react'
import {BrowserRouter,Routes,Route} from "react-router-dom"
import Home from './pages/Home'
import Disorderpage from './pages/Disorderpage'
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
import Botpage from './pages/Botpage'
import Financial from './pages/Financial'
import Notification from './pages/Notification'
import Appear from './pages/Appear'
import Genform from './pages/Genform'
import Genform2 from './pages/Genform2'
import Genform3 from './pages/Genform3'
import Optionpage from './pages/Optionpage'
import Genct from './pages/Careform'
import Moodpage from './pages/Moodpage'

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/Disorderpage' element={<Disorderpage/>}/>
          <Route path='/Appear' element={<Appear/>}/>
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
          <Route path='/BotPage' element={<Botpage/>}/>
          <Route path='/Financial' element={<Financial/>}/>
          <Route path='/Notification' element={<Notification/>}/>
          <Route path='/Genform' element={<Genform/>}/>
          <Route path='/Genform2' element={<Genform2/>}/>
          <Route path='/Genform3' element={<Genform3/>}/>
          <Route path='/Genct' element={<Genct/>}/>
          <Route path='/Optionpage' element={<Optionpage/>}/>
          <Route path='/Moodpage' element={<Moodpage/>}/>
          </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
