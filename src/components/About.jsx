import React from 'react'

function About() {
  return (
   <>
   <div className='flex flex-col items-center bg-gradient-to-r from-indigo-700 via-purple-600 to-blue-500 p-8'>
     <p className='text-2xl font-semibold text-center mt-5'>"Sometimes it's better to <span className='text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-white via-indigo-400 to-sky-500'>React</span> without reaction."</p>
   <div>
     <div className="about-image flex flex-col items-center justify-center mt-5 p-5" >
        <img className='w-md border rounded-2xl cursor-pointer transition-opacity' src="./about.jpeg " alt="" /> 

    </div>
    <h2 className='text-6xl font-extrabold  text-center text-transparent bg-clip-text bg-gradient-to-r from-white via-sky-200 to-purple-400'>About This Project</h2>
    <div  className=' text-shadow-gray-300 text-white font-bold p-5'>
      <p className='font-bold text-lg'>
       This is a simple movie searching application built with React. It allows users to search for movies and view details about them. Movie data is fetched from the OMDB API. Debouncing is implemented to optimize search performance. User can navigate between Home and About pages using React Router. This is fun project to practice React concepts like state management, effects, routing, and API integration. It is not intended for production use, or as a complete movie database solution. Feel free to explore and modify the code for learning purposes! 
      </p>
</div>
   </div>
   </div>
   </>
  )
}

export default About