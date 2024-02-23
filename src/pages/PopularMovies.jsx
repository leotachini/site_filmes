import { useEffect, useState } from "react";
import MovieCard from "../components/MovieCard";
import Box from "@mui/material/Box"

const moviesUrl = import.meta.env.VITE_API_URL;
const apiKey = import.meta.env.VITE_API_KEY;

const Home = () => {

    const[movies, setMovies] = useState([]);

    const getMovies = async (url) => {
        const response = await fetch(url);
        const data = await response.json();
        setMovies(data.results);
    }

    useEffect(() => {
      const RatedUrl = `${moviesUrl}popular?${apiKey}`;
      getMovies(RatedUrl);

    }, []);

  return (
    <div className="container">
      <Box className="movies-container" sx={{ gridTemplateColumns: {xs: "repeat(1,1fr)",sm: "repeat(2,1fr)", md: "repeat(3,1fr)", lg: "repeat(4, 1fr)", xl: "repeat(5, 1fr)" } }}>
        {movies.length === 0 && <p>Loading...</p>}
      {movies?.map((movie) => <MovieCard key={movie.id} movie={movie} /> )}
     </Box>
    </div>
  )
}

export default Home