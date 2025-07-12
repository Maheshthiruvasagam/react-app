import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

const API_KEY = "55a41b6d"; // Replace with your actual OMDb API key

const MovieDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to top when page loads
    axios
      .get(`https://www.omdbapi.com/?i=${id}&plot=full&apikey=${API_KEY}`)
      .then((res) => setMovie(res.data));
  }, [id]);

  if (!movie) return <div style={{ color: "white", padding: "80px 20px" }}>Loading...</div>;

  return (
    <div style={{ padding: "80px 20px", background: "#111", color: "white", minHeight: "100vh" }}>
      <button
        onClick={() => navigate(-1)}
        style={{
          backgroundColor: "#e50914",
          border: "none",
          color: "white",
          padding: "8px 16px",
          borderRadius: "4px",
          cursor: "pointer",
          marginBottom: "20px",
        }}
      >
        ← Back
      </button>

      <h1>{movie.Title}</h1>

      <img
        src={movie.Poster !== "N/A" ? movie.Poster : "https://via.placeholder.com/200"}
        alt={movie.Title}
        style={{
          width: "200px",
          borderRadius: "10px",
          marginBottom: "20px",
          boxShadow: "0 0 10px rgba(255,255,255,0.2)",
        }}
      />

      <p><strong>Plot:</strong> {movie.Plot}</p>
      <p><strong>Released:</strong> {movie.Released}</p>
      <p><strong>Genre:</strong> {movie.Genre}</p>
      <p><strong>IMDB Rating:</strong> {movie.imdbRating}</p>

      {/* ✅ Responsive YouTube video */}
      <div style={{ marginTop: "30px" }}>
        <h3>Watch Trailer (Demo)</h3>
        <div
          style={{
            position: "relative",
            paddingBottom: "56.25%",
            height: 0,
            overflow: "hidden",
            maxWidth: "100%",
            borderRadius: "12px",
            boxShadow: "0 0 10px rgba(255,255,255,0.2)",
          }}
        >
         <iframe
            src="https://www.youtube.com/embed/y1TsOIB96e8?si=GRsjtuc8Wn4ye06O"
            title="YouTube trailer"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
            }}
          ></iframe>
          
        </div>
      </div>
    </div>
  );
};

export default MovieDetails;
