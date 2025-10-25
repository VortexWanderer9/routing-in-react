import React from 'react'

function NavBar() {
  return (
   <>
   <section id='navBar'>
   <div className="nav-links flex items-center gap-8 font-bold justify-center p-5 font-mono text-2xl">
    <a href="#">Home</a>
     <a href="About.jsx">About</a>
      <a href="#">Contract</a>
   </div>
   </section>
   </>
  )
}

export default NavBar