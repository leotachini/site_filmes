/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { FaStar } from "react-icons/fa";

const moviesURL = import.meta.env.VITE_API_URL;
const apiKey = import.meta.env.VITE_API_KEY;
const imageUrl = import.meta.env.VITE_IMG;
// const genreUrl = import.meta.env.VITE_GENRE;

const Movie = () => {
  const { id } = useParams();
  const [movies, setMovies] = useState(null);

  const getMovie = async (url) => {
    const response = await fetch(url);
    const data = await response.json();
    setMovies(data);
  };

  useEffect(() => {
    const movieURL = `${moviesURL}${id}?${apiKey}`;
    getMovie(movieURL);
  }, []);


  return (
    <div className="movie">
      {movies && (
        <div className="movie-info">
          <img
            src={imageUrl + movies.poster_path}
            alt={movies.title}
            style={{border:"10px solid black"}}
          />
          <h1 className="nomeFilme">{movies.title}</h1>
          <h1 style={{ margin: 20 }}>{movies.overview}</h1>
          <h1>
            {" "}
            <FaStar color="yellow" /> {movies.vote_average}
          </h1>
          <h1>{movies.tagline}</h1>
        </div>
      )}
    </div>
  );
};

export default Movie;
