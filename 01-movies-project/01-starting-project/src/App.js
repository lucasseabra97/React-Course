import React, { useState, useCallback, useEffect } from "react";
import MoviesList from "./components/MoviesList";
import "./App.css";

function App() {
  const [movies, setMovies] = useState([]);
  const [loading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const fectchMoviesHandler = useCallback(async () => {
    setIsLoading(true);
    setError(null);
    // in a chain promess based it would be only necessary to .cath
    // since is a await promess based we need to try catch the error
    try {
      const res = await fetch("https://swapi.dev/api/films");
      if (!res.ok) {
        console.log("here");
        throw new Error("Something went wrong");
      }
      const data = await res.json();

      const transformedMovies = data.results.map((movie) => {
        return {
          id: movie.episode_id,
          title: movie.title,
          openingText: movie.opening_crawl,
          releaseDate: movie.release_date,
        };
      });
      setMovies(transformedMovies);
    } catch (error) {
      setError(error.message);
    }
    setIsLoading(false);
  },[]);

  useEffect(() => {
    fectchMoviesHandler();
  }, [fectchMoviesHandler]);

  return (
    <React.Fragment>
      <section>
        <button onClick={fectchMoviesHandler}>Fetch Movies</button>
      </section>
      <section>
        {!loading && movies.length > 0 && <MoviesList movies={movies} />}
        {!loading && movies.length === 0 && !error && <p>No movies Found</p>}
        {!loading && error && <p>{error}</p>}
        {loading && <p>Loading...</p>}
      </section>
    </React.Fragment>
  );
}

export default App;
