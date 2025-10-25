import React from 'react'
import { NavLink } from 'react-router-dom'

function Footer() {
  return (
    <>
   <div className=' flex flex-col'>
    <div className="logo">
      <img className='cursor-pointer' src="./panther.svg" alt="" />
    </div>
    <div className="links flex justify-around items-center">
      <div className="social-links flex flex-col"> 
        <span className="font-bold">Social Links</span>
      <a href="#">YouTube</a>
      <a href="#">GitHub</a>
      <a href="#">Facebook</a>
    </div>
    <div className="page-links flex flex-col">
      <span className="font-bold">Page Links</span>
      <NavLink className={({isActive}) => `${isActive ? " font-bold"  : "font-normal"}`} to= '/'>Home</NavLink>
      <NavLink className={({isActive}) => `${isActive ? "font-bold" : "font-normal"}`} to= 'about'>About</NavLink>
      <NavLink className={({isActive}) => `${isActive ? "font-bold" : "font-normal"}`} to= 'contact'>Contract</NavLink>
    </div>
    </div>
    <div className="copyright flex justify-center items-center p-4  text-black font-mono font-semibold bg-emerald-600 mt-6">
      <span >© 2025. All rights reserved.</span>

    </div>
   </div>
    </>
  )
}

export default Footer