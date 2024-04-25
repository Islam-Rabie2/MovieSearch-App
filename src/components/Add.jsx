import React, { useEffect, useState } from "react";
import {ResultCard} from "./ResultCard";
import axios from "axios";

const Add = () => {
  const [searchValue, setSearchValue] = useState("");
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    axios
      .get(`https://www.omdbapi.com/?s=${searchValue}&apikey=148f7e34`)
      .then((response) => {
        if (response.data.Search) {
          setMovies(response.data.Search);
        }
      })
      .catch((error) => console.log(error));
  }, [searchValue]);
  return (
    <div className="add-page">
      <div className="container">
        <div className="add-content">
          <div className="input-wrapper">
            <input
              type="text"
              value={searchValue}
              placeholder="Search for a movie"
              onChange={(e) => setSearchValue(e.target.value)}
            />
            {movies.length > 0 && (
              <ul className="results">
                {movies.map((movie) => (
                  <li key={movie.imdbID}>{<ResultCard movie={movie} />}</li>
                ))}
              </ul>
            )}
          </div>
          <ul className="results"></ul>
        </div>
      </div>
    </div>
  );
};

export default Add;
