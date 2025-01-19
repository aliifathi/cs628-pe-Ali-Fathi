import React, { useState } from 'react';
import './MovieList.css';

const MovieList = () => {
  const movies = [
    { title: 'Inception', genre: 'Sci-Fi', releaseYear: 2010 },
    { title: 'The Dark Knight', genre: 'Action', releaseYear: 2008 },
    { title: 'Interstellar', genre: 'Sci-Fi', releaseYear: 2014 },
    { title: 'Titanic', genre: 'Romance', releaseYear: 1997 },
    { title: 'The Matrix', genre: 'Sci-Fi', releaseYear: 1999 },
    { title: 'Gladiator', genre: 'Action', releaseYear: 2000 },
  ];

  const [selectedGenre, setSelectedGenre] = useState('All Genres');
  const genres = ['All Genres', ...new Set(movies.map((movie) => movie.genre))];

  const filteredMovies =
    selectedGenre === 'All Genres'
      ? movies
      : movies.filter((movie) => movie.genre === selectedGenre);

  const handleMovieClick = (title) => {
    alert(`You selected: ${title}`);
  };

  return (
    <div className="movie-list">
      <h1>Movie List</h1>
      <label htmlFor="genre-select">Filter by Genre: </label>
      <select
        id="genre-select"
        value={selectedGenre}
        onChange={(e) => setSelectedGenre(e.target.value)}
      >
        {genres.map((genre) => (
          <option key={genre} value={genre}>
            {genre}
          </option>
        ))}
      </select>

      <ul>
        {filteredMovies.map((movie, index) => (
          <li
            key={index}
            className="movie-card"
            onClick={() => handleMovieClick(movie.title)}
          >
            <h2>{movie.title}</h2>
            <p>Genre: {movie.genre}</p>
            <p>Release Year: {movie.releaseYear}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MovieList;
