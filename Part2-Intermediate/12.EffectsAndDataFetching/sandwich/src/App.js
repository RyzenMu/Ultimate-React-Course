import "./App.css";
import SearchBar from "./components/SearchBar";
import { useState, useEffect } from "react";
import Main from "./components/Main";
import Loading from "./components/Loading";

function App() {
  const [query, setQuery] = useState("");
  const [movies, setMovies] = useState([]);
  const [movieDetailsMovie, setMovieDetailsMovie] = useState(null);
  // fetch movies from api
  useEffect(
    function () {
      let isMounted = true;

      async function fetchMovies(query) {
        try {
          //api key
          const KEY = "d667dffb";

          // fetch json
          const res = await fetch(
            `http://www.omdbapi.com/?apikey=${KEY}&s=${query}`
          );
          const data = await res.json();

          // destructure json data
          if (isMounted && data.Search && data.Search.length > 0) {
            setMovies([...data.Search]);
          }
        } catch (err) {
          console.error(err);
        } finally {
        }
      }
      if (query) {
        fetchMovies(query);
      }

      return () => {
        isMounted = false;
        setMovies([]); // Reset movies to show the loader
      };
    },

    [query]
  );

  //React's state update are asynchronous so the movie will not be updated, so using separate useEffect to show movies state.
  // useEffect(
  //   function () {
  //     console.log(movies);
  //   },
  //   [movies]
  // );

  return (
    <>
      <SearchBar query={query} onSetQuery={setQuery} />
      {movies.length ? (
        <Main
          movies={movies}
          onSetMovieDetailsMovie={setMovieDetailsMovie}
          movieDetailsMovie={movieDetailsMovie}
        />
      ) : (
        <Loading />
      )}
    </>
  );
}

export default App;
