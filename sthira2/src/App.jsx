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
import Optionpage from './pages/Optionpage'
import Genct from './pages/Careform'
import Moodpage from './pages/Moodpage'
import Hopelesspage from './pages/Hopelesspage'
import Alcoholpage from './pages/Alcoholpage'
import Mychatpage from './pages/Mychatpage'
import Readpage from './pages/Readpage'
import Blog1 from './pages/Blog1'
import Blog2 from './pages/Blog2'
import Blog3 from './pages/Blog3'
import PrivateRoute from './PrivateRoute'
import { AuthProvider } from './AuthContext'
import Videopage1 from './pages/videopage1'
import Dash from './pages/Dash'
import Videopage2 from './pages/Videopage2'
import Videopage3 from './pages/Videopage3'
import Emergencypage from './pages/Emergencypage'

const App = () => {
  return (
    <div>
      
      <BrowserRouter>
      <AuthProvider>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path="/Disorderpage" element={<PrivateRoute element={<Disorderpage />} />} />
          <Route path='/Appear' element={<Appear/>}/>
          <Route path='/community' element={<Community/>}/>
          <Route path='/account' element={<Account/>}/>
          <Route path='/Chatbot' element={<Chatbot/>}/>
          <Route path='/Login' element={<Login/>}/>
          <Route path='/Register' element={<Register/>}/>
          <Route path="/Anx" element={<PrivateRoute element={<Anx />} />} />
          <Route path="/BecksDep" element={<PrivateRoute element={<BecksDep />} />} />
          <Route path='/Eating' element={<Eating/>}/>
          <Route path='/SleepPage' element={<SleepPage/>}/>
          <Route path='/ImagePage' element={<ImagePage/>}/>
          <Route path='/BotPage' element={<Botpage/>}/>
          <Route path='/Financial' element={<Financial/>}/>
          <Route path='/Notification' element={<Notification/>}/>
          <Route path='/Genform' element={<Genform/>}/>
          <Route path='/Genct' element={<Genct/>}/>
          <Route path='/Optionpage' element={<Optionpage/>}/>
          <Route path='/Moodpage' element={<Moodpage/>}/>
          <Route path='/Hopelesspage' element={<Hopelesspage/>}/>
          <Route path='/Alcoholpage' element={<Alcoholpage/>}/>
          <Route path='/Mychatpage' element={<Mychatpage/>}/>
          <Route path='/Readpage' element={<Readpage/>}/>
          <Route path='/Blog1' element={<Blog1/>}/>
          <Route path='/Blog2' element={<Blog2/>}/>
          <Route path='/Blog3' element={<Blog3/>}/>
          <Route path='/Videopage1' element={<Videopage1/>}/>
          <Route path='/Dash' element={<Dash/>}/>
          <Route path='/Videopage2' element={<Videopage2/>}/>
          <Route path='/Videopage3' element={<Videopage3/>}/>
          <Route path='/Emergencypage' element={<Emergencypage/>}/>
          </Routes>
          </AuthProvider>
      </BrowserRouter>
     
    </div>
  )
}

export default App
