import { useEffect, useState } from "react";
import MovieCard from "../components/MovieCard";
import Box from "@mui/material/Box"

const moviesUrl = import.meta.env.VITE_API_URL;
const apiKey = import.meta.env.VITE_API_KEY;

const Home = () => {

    const[topMovies, setTopMovies] = useState([]);

    const getTopMovies = async (url) => {
        const response = await fetch(url);
        const data = await response.json();
        setTopMovies(data.results);
    }

    useEffect(() => {
      const topRatedUrl = `${moviesUrl}top_rated?${apiKey}`;
      getTopMovies(topRatedUrl);

    }, []);

  return (
    <div className="container">
      <Box className="movies-container" sx={{ gridTemplateColumns: {xs: "repeat(1,1fr)",sm: "repeat(2,1fr)", md: "repeat(3,1fr)", lg: "repeat(4, 1fr)", xl: "repeat(5, 1fr)" } }}>
        {topMovies.length === 0 && <p>Loading...</p>}
      {topMovies?.map((movie) => <MovieCard key={movie.id} movie={movie} /> )}
     </Box>
    </div>
  )
}

export default Home