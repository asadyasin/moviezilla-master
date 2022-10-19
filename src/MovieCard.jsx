import React from "react";
const image_url = "https://www.themoviedb.org/t/p/w220_and_h330_face/"
const MovieCard =({movie})=>{
    return(
        <div className='movie'>
            <div>
                <p>{movie.release_date}</p>
            </div>
            <div>
                <img src={ movie.poster_path !== null ? `${image_url}${movie.poster_path}`:'https://via.placeholder.com/400?text=No+Image'} alt={movie.Title}/>    
            </div>
            <div>
                <span>Ratings: {movie.vote_average}</span>
                <h3>{movie.title}</h3>
            </div>    
        </div>   
    );
}

export default MovieCard;