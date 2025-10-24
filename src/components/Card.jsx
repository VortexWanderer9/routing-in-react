import React from 'react'

function Card({movie: {title, vote_average, poster_path, release_date, original_language}}) {
  return (
  <>
  <div className="card">
            <div className="movie-image">
            <img className='' src= {poster_path ? `https://image.tmdb.org/t/p/w500${poster_path}` :
              "./no-movie.png"} alt="" />
            </div>
            <div className="movie-title">
              <span className=' font-bold  text-blue-950 cursor-pointer'>{title}</span>
            </div>
           <div className="des flex gap-5 text-black/50">
             <span className="language">
             • {original_language}
            </span>
            <span className="release-date">
            • {release_date}
            </span>
            <span className="rating">
            ★ {vote_average.toFixed(2)}
            </span>
           </div>
          </div>
  </>
  )
}

export default Card