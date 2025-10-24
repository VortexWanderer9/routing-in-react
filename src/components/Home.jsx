import React from 'react'

function Home() {
  return (
    <>
    <main className='flex items-center'>
        <div className="w-full flex flex-col items-center justify-center">
            <h2 className='font-mono text-center mt-3 text-3xl'>Welcome to React <span className='text-gradient font-bold'>Routing</span> Project</h2>
            <div className="search-section w-md mt-3">
                <div className="w-full outline-none bg-black/10 p-3 rounded flex gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><circle cx="11" cy="11" r="8" fill="#fff"/><path d="m21 21l-4.3-4.3" fill="#fff"/></g></svg>
                <input type="text" placeholder='Enter Movie Name' className='w-full outline-none text-base' />
            </div>
            </div>
        </div>
    </main>
    
    </>
  )
}

export default Home