import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import LandingPage from './Components/landingpage'
import SignUp from './Components/authpages/signup-page'
import LoginPage from './Components/authpages/loginpage'
import {Routes, Route} from 'react-router-dom'
import HomePage from './Components/homepage'
import Policies from './Components/Policiespage'
import SuccessPage from './Components/successpage'

// import {firebaseConfig} from './Config/firebaseConfig';
// import {initializeApp} from "firebase/app"


function App() {

  return (
    <div>
      <Routes> 
        <Route path="/" element={<LandingPage/>}/>
        <Route path="/SignUp" element={<SignUp/>}/>
        <Route path="/LoginPage" element={<LoginPage/>}/>
        <Route path="/HomePage" element={<HomePage/>}/>
        <Route path="/Policies" element={<Policies/>}/>
        <Route path="/Success" element={<SuccessPage/>}/> 
      </Routes>
    
    </div>
  )
}

export default App

