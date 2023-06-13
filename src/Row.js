import axios from "./axios";
// instance is remained to axios as it was default export
import React, { useEffect, useState } from "react";
import "./Row.css";

const base_url = "https://image.tmdb.org/t/p/original/";

function Row({ title, fetchUrl, isLargeRow }) {
  const [movies, setmovies] = useState([]);

  // A snippet of code which runs based on specific condition
  // If row comes on screen / load
  useEffect(() => {
    // if [], run once when the row loads and don't run it again
    // variables used in useEffect should be in list
    // if [movies], un once when the row loads and when movies changes

    // async inside useEffect
    async function fetchData() {
      const request = await axios.get(fetchUrl);
      setmovies(request.data.results);
      return request;
    }
    fetchData();
  }, [fetchUrl]);

  console.log(movies);

  return (
    <div className="row">
      <h2>{title}</h2>

      <div className="row_posters">
        {movies.map((movie) => (
          <img
            key={movie.id}
            className={`row_poster ${isLargeRow && "row_posterLarge"} `}
            src={`${base_url}${
              isLargeRow ? movie.poster_path : movie.backdrop_path
            }`}
            alt={movie.title}
          ></img>
        ))}
      </div>
    </div>
  );
}

export default Row;
