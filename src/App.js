import React from 'react'
import { useState, useEffect } from 'react';
import MovieCard from './MovieCard';
import './App.css';
import SearchIcon from './search.svg';

const API_URL = `http://www.omdbapi.com`;

const App = () => {
    
    const [movies , setMovies] = useState([]);
    const [searchTerm, setSearchTerm] =useState('');
    const searchMovies = async (title) =>{
        const response = await fetch(`${API_URL}/?s=${title}&apikey=955702c3`);
        const data = await response.json();
        setMovies(data.Search);
    }
useEffect(() => {
    searchMovies('godzilla');
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
