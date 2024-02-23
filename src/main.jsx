
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import App from './App.jsx'
import Home from './pages/Home.jsx'
import Movie from './pages/Movie.jsx'
import Search from './pages/Search.jsx'
import PopularMovies from './pages/PopularMovies.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Routes>
      <Route element={<App />}>
        <Route path="/" element={<Home />} />
        <Route path="popular" element={<PopularMovies />} />
        <Route path="movie/:id" element={<Movie />} />
        <Route path="search" element={<Search />} />

      </Route>
    </Routes>
  </BrowserRouter>
)
