import React from 'react'
import { NavLink } from 'react-router-dom'

function NavBar() {
  return (
   <>
   <section id='navBar'>
   <div className="nav-links flex items-center gap-8 font-bold justify-center p-5 font-mono text-2xl">
   <NavLink
  to="/"
  end  // ensures exact match
  className={({ isActive }) => isActive ? "active" : ""}
>
  Home
</NavLink>

     <NavLink className={({isActive}) => isActive ? "active" : ""} to = 'about'>About</NavLink>
      <NavLink className={({isActive}) => isActive ? "active" : ""} to = 'contact'>Contact</NavLink>
   </div>
   </section>
   </>
  )
}

export default NavBar