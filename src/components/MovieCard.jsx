/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import { FaStar } from "react-icons/fa";

const imageUrl = import.meta.env.VITE_IMG;

const MovieCard = ({movie}) => {
  return (
    <div className="movie-card">
        <Link to={`/movie/${movie.id}`}>
<img src={imageUrl + movie.poster_path} alt={movie.title} height={400}/>

<h2>{movie.title}</h2>
<p>
<FaStar color="yellow" /> {movie.vote_average}
</p>
</Link>
</div>
  )
}

export default MovieCard