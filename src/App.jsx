import React from 'react'
import './index.css'
import './App.css'
import NavBar from './components/NavBar'
import Footer from './components/Footer'
import Home from './components/Home'
import About from './components/About'
import Contact from './components/Contact'
import { Outlet } from 'react-router-dom'
function App() {
  return (
  <>
    <NavBar />
  {/* <Home /> */}
  {/* <About /> */}
  {/* <Contract /> */}
  <Outlet />
  <Footer />

  </>
  )
}

export default App
