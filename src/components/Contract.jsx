import React from 'react'

function Contract() {
  return (
   <>
  <div class="bg-gradient-to-r from-sky-100 via-cyan-100 to-purple-200 p-8">
 <h1
  class="text-3xl sm:text-4xl md:text-5xl lg:text-6xl 
         font-extrabold text-center 
         bg-gradient-to-r from-purple-500 via-indigo-400 to-sky-500 
         bg-clip-text text-transparent">
  Contact Me
</h1>


  <div className='flex flex-col md:flex-row lg:justify-around p-4'>
    <div className="image p-4 flex">
        <img className='w-sm' src="./contract.svg" alt="Svg" />
    </div>
    <div className="text rounded">
        <form action="#" className='flex flex-col gap-6'>
            <div className="name flex flex-col">
                <label htmlFor="name">Full Name</label>
                <input className='outline-none rounded' type="text" placeholder='Enter your full name' />
            </div>
            <div className="email flex flex-col">
                <label htmlFor="Email">Email:</label>
              <input className='rounded' type="text" id='Email' placeholder='Enter your email' />
            </div>
            <div className='flex flex-col'>
            <label htmlFor="description" style={{fontSize: '20px'}}>Description:</label>
            <textarea name="description" id="description"></textarea>
            </div>
            <button onClick={(e) => e.preventDefault() } className='bg-cyan-600 font-black text-lg hover:bg-cyan-500 cursor-pointer p-3 rounded'>Submit</button>
        </form>
    </div>
  </div>
</div>

   </>
  )
}

export default Contract