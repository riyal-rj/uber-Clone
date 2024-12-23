import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import UserSignup from './pages/userSignup'
import UserLogin from './pages/userLogin'
import CaptainLogin from './pages/captainLogin'
import CaptainSignup from './pages/captainSignup'
import UserVerify from './pages/UserVerify'
import Start from './pages/Start'
import UserProtectWrapper from './pages/UserProtectWrapper'
import CaptainHome from './pages/CaptainHome'
import CaptainProtectWrapper from './pages/CaptainProtectWrapper'
import UserProfilePage from './pages/UserProfilePage'
import Riding from './pages/Riding'
import CaptainRiding from './pages/CaptainRiding'
const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Start />} />
        <Route path='/userSignup' element={<UserSignup/>} />
        <Route path='/userLogin' element={<UserLogin/>} />
        <Route path='/captainSignup' element={<CaptainSignup/>} />
        <Route path='/captainLogin' element={<CaptainLogin/>} />
        <Route path='/verifyUser' element={<UserVerify/>} />
        <Route path='/user-profile' element={<UserProfilePage/>}/>
        <Route path='/riding' element={<Riding/>}/>
        <Route path='/captain-riding' element={<CaptainRiding/>}/>
        <Route path='/home' element={
          <UserProtectWrapper>
            <Home />
          </UserProtectWrapper>
        } />
        <Route path='/captainHome' element={<CaptainProtectWrapper>
          <CaptainHome/>
        </CaptainProtectWrapper>}/>
      </Routes>
    </div>


  )
}

export default App