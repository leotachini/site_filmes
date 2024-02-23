import { Link, useNavigate } from "react-router-dom";
import { GiFilmProjector, GiFilmStrip } from "react-icons/gi";
import {BiSearchAlt2 } from "react-icons/bi";
// import { FaFilm } from "react-icons/fa";
import Box from "@mui/material/Box";
import { useState } from "react";

const Navbar = () => {
  const [pesquisa, setPesquisa] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!pesquisa){
      return;
    }
    navigate(`/search?q=${pesquisa}`);
    setPesquisa("");
  }

  return (
    <nav
      id="navbar"
      style={{ backgroundColor: "black", padding: 16, backgroundSize: "cover"}}
    >
      <Box sx={{ display: { sm: "block", md: "flex" } }}>
        <h1 style={{ color: "white", cursor: "default" }} id="logo">
          <GiFilmProjector color="white" size={60} />
             Filminhos
             <GiFilmStrip color="white" size={60} />

        </h1>
        <ul
          style={{
            display: "flex",
            listStyle: "none",
            marginRight: 4,
            marginLeft: 10,
          }}
        >
          <li>
            {" "}
            <Link to="/">
              Home
            </Link>
          </li>
          <li>
            {" "}
            <Link to="/popular">
              Filmes Populares
            </Link>
          </li>
        </ul> 

        <div style={{ marginLeft: "auto", right: 0 }}>
          <form onSubmit={handleSubmit}>
            <div style={{ marginTop: 7, display: "flex" }}>
              <input
                type="text"
                placeholder="Search"
                name="search"
                style={{ fontSize: 30 }}
                onChange={(e) => setPesquisa(e.target.value)}
                value={pesquisa}
                id="inputSearch"              />
              <button
                type="submit"
                value="Search"
                name="searchButton"
                style={{ height: 60, width: 40 }}
              >
                <BiSearchAlt2 size={25} />
              </button>
            </div>
          </form>
        </div>
      </Box>
    </nav>
  );
};

export default Navbar;
