import React, { useEffect, useRef, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./index.css";

const API_KEY = "55a41b6d";
const SEARCH_QUERY = "avengers";

const Carousel = () => {
  const [movies, setMovies] = useState([]);
  const rowRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`https://www.omdbapi.com/?s=${SEARCH_QUERY}&apikey=${API_KEY}`)
      .then((res) => {
        if (res.data.Search) {
          setMovies(res.data.Search);
        }
      });
  }, []);

  const scroll = (offset) => {
    rowRef.current.scrollLeft += offset;
  };

  const handleClick = (id) => {
    navigate(`/movie/${id}`);
  };

  return (
    <div className="carousel">
      <h2 className="carousel-title">Trending One</h2>
      <div className="carousel-container">
        <button className="arrow left" onClick={() => scroll(-300)}>&#8249;</button>
        <div className="carousel-row" ref={rowRef}>
          {movies.map((movie) => (
            <div
              className="card"
              key={movie.imdbID}
              onClick={() => handleClick(movie.imdbID)}
            >
              <img
                src={movie.Poster !== "N/A" ? movie.Poster : "https://via.placeholder.com/150"}
                alt={movie.Title}
              />
              <div className="card-title">{movie.Title}</div>
            </div>
          ))}
        </div>
        <button className="arrow right" onClick={() => scroll(300)}>&#8250;</button>
      </div>
    </div>
  );
};

export default Carousel;
