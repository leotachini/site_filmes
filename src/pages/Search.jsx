import { useState, useEffect } from "react"
import { useSearchParams } from "react-router-dom"
import MovieCard from "../components/MovieCard"
import Box from "@mui/material/Box"

const searchURL = import.meta.env.VITE_SEARCH;
const apiKey = import.meta.env.VITE_API_KEY;

const Search = () => {
  const [searchParams] = useSearchParams();
  const [movies, setMovies] = useState([])
  const query = searchParams.get("q")

  const getSearchedMovies = async (url) => {
    const response = await fetch(url);
    const data = await response.json();
    setMovies(data.results);
    console.log(data.results);
};

useEffect(() => {
  const searchQueryURL = `${searchURL}?${apiKey}&query=${query}`;
  getSearchedMovies(searchQueryURL); 

}, [query]);

  return (
    <div>
     <h2>
        Resultados para: <span className="query-text">{query}</span>
     </h2>
     <Box className="movies-container" sx={{ gridTemplateColumns: {xs: "repeat(1,1fr)",sm: "repeat(2,1fr)", md: "repeat(3,1fr)", lg: "repeat(4, 1fr)", xl: "repeat(5, 1fr)" } }}>
        {movies?.length == 0 && <p>Não existe filmes com esse nome</p>}
        {movies?.map((movie) => <MovieCard key={movie.id} movie={movie} />)}
        
     </Box>
    </div>
  )
}

export default Search