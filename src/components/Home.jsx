import React from 'react'
import { useEffect, useState } from 'react'
import { useDebounce } from 'react-use'
import Card from './Card';
import Spinner from './Spinner';
const API_BASE_URL = 'https://api.themoviedb.org/3';
    const API_KEY = `eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4OWU2NDliZjI5NDNkZDEwZTgwNzYzM2EwY2IxNGRmYyIsIm5iZiI6MTc2MDM0MzE1OS4zODYsInN1YiI6IjY4ZWNiNDc3ZWZjMGEyMzc5MGQ2OGZhYSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.a8TonxUyZmVe0Hx-Rvbe2VReN6khegeQbfi8dj6buaM`
    const API_OPTIONS = {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization: `Bearer ${API_KEY}`
      }
    }

function Home() {
 const [error, setError] = useState("");
 const [loading, setLoading] = useState(false)
  const [movies, setMovies] = useState([]);
  const [search, setSearch] = useState('')
  const [debounceSearch, setDebounceSearch] = useState('');
     useDebounce(() => setDebounceSearch(search), 500, [search]);
  useEffect(() => {
    fetchMovies(debounceSearch);
  }, [debounceSearch]);

  const fetchMovies = async ( query = '' ) => {
    setLoading(true)
    
    const final = query ?   `${API_BASE_URL}/search/movie?query=${encodeURIComponent(query)}`
    : `${API_BASE_URL}/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc`;
    try {
      const response = await fetch(final, API_OPTIONS);
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await response.json();
      setMovies(data.results);
    } catch (error) {
      setError("Failed to fetch movies. Please try again later.");
      console.log(error);
    } finally{
      setLoading(false)
    }
  };

  return (
    <>
    <main className='flex flex-col items-center justify-center mt-6'>
        <div className="w-full flex flex-col items-center justify-center">
            <h2 className='font-mono text-white text-center mt-3 text-3xl'>Welcome to React <span className='text-gradient font-bold'>Routing</span> Project</h2>
            <div className="hero-image">
              <img src="./hero.png" alt="" />
            </div>
            <div className="search-section w-md mt-5">
                <div className="w-full outline-none p-3 rounded flex gap-2" style={
                  {
                    background: '#c5e1a5',
                    color: '#000'
                  }
                }>
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><circle cx="11" cy="11" r="8" fill="#fff"/><path d="m21 21l-4.3-4.3" fill="#fff"/></g></svg>
                <input type="text" value={search} onChange={(e) => setSearch(e.target.value)} placeholder='Enter Movie Name' className='w-full outline-none text-base' />
            </div>
            </div>
        </div>
         <h2 className='font-bold text-3xl mt-9 text-blue-700 cursor-pointer hover:text-blue-600 '>{error ? error : "All Movies"}</h2>
         {loading ? <Spinner /> :
         <div className="all-movies">
        {movies.map((movie) =>(
          <Card key={movie.id} movie = {movie} />
        ))}
        </div>}
    </main>
    </>
  )
}

export default Home