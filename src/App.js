import MoviesList from "./Components/MovieList";
import "./App.css";
import { useState } from "react";

function App() {
  const [movies, setMovies] = useState([]);

  function fetchMovies() {
    fetch("https://swapi.dev/api/films")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        const transformedMovies = data.results.map((movieData) => {
          return {
            id: movieData.episode_id,
            title: movieData.title,
            openingText: movieData.opening_crawl,
            releaseDate: movieData.release_data,
          };
        });
        setMovies(transformedMovies);
      });
  }

  return (
    <>
      <section>
        <button onClick={fetchMovies}>Fetch Movies</button>
      </section>
      <section>
        <MoviesList movies={movies} />
      </section>
    </>
  );
}

export default App;
