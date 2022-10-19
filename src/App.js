import React from 'react'
import { useState, useEffect } from 'react';
import MovieCard from './MovieCard';
import './App.css';
import SearchIcon from './search.svg';

const API_URL2=`https://api.themoviedb.org/3/search/movie?api_key=`;
const API_KEY = `4dfdddbcf3d766c55de7797df062b013`;
const App = () => {
    
    const [movies , setMovies] = useState([]);
    const [searchTerm, setSearchTerm] =useState('');
    const searchMovies = async (title) =>{
        const response = await fetch(`${API_URL2}${API_KEY}&query=${title}`);
        const data = await response.json();
        setMovies(data.results);
        console.log(data.results);
    }
useEffect(() => {
    searchMovies('batman');
}, []); 
  return (
        <div className='app'>
            <h1>Movie Zilla</h1>
            <div className='search'>
                <input 
                    placeholder='Search for movie'
                    value={searchTerm}
                    onChange={(e)=> setSearchTerm(e.target.value)}
                />
                <img
                src={SearchIcon}
                alt='search'
                onClick={()=> searchMovies(searchTerm)}
                />
            </div>
            { movies?.length>0 ?( 
                <div className='container'>
                    {movies.map((movie,index)=>(
                        <MovieCard key={index} movie={movie}/>
                        
                    ))
                    }
                </div>) 
                : 
                (
                    <div className='empty'>
                        <h2>No Movies Found</h2>
                    </div>
                )
            }
            
        </div>
    );
}

export default App;
