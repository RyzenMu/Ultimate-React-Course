import { useEffect, useState } from "react";

export default function MovieDetails({ movieDetailsMovie }) {
  const [movieDetails, setMovieDetails] = useState({
    director: "",
    genre: "",
    plot: "",
    poster: "",
    released: "",
    runtime: "",
    title: "",
    year: "",
    imdbID: "",
    imdbRating: "",
  });
  const [loading, setLoading] = useState(false);

  useEffect(
    function () {
      let isMounted = true;

      async function fetchMovieAgain() {
        const KEY = "d667dffb";

        //start loading
        setLoading(true);
        try {
          const res = await fetch(
            `http://www.omdbapi.com/?apikey=${KEY}&i=${movieDetailsMovie}`
          );
          const data = await res.json();
          if (isMounted && data) {
            setMovieDetails({
              director: data.Director,
              genre: data.Genre,
              plot: data.Plot,
              poster: data.Poster,
              released: data.Released,
              runtime: data.Runtime,
              title: data.Title,
              year: data.Year,
              imdbID: data.imdbID,
              imdbRating: data.imdbRating,
            });
          }
        } catch (err) {
          console.error(err);
        } finally {
          setLoading(false);
        }
      }
      if (movieDetailsMovie) {
        fetchMovieAgain();
      }
      return function () {
        isMounted = false;
        setMovieDetails({
          director: "",
          genre: "",
          plot: "",
          poster: "",
          released: "",
          runtime: "",
          title: "",
          year: "",
          imdbID: "",
          imdbRating: "",
        });
      };
    },
    [movieDetailsMovie]
  );

  if (loading) {
    return <div> Loading...</div>;
  }

  return (
    <div className="MovieDetails">
      {movieDetails ? (
        <div className="section">
          <section>
            <img
              src={movieDetails.poster}
              alt={`pic of ${movieDetails.title}`}
            />
          </section>
          <section>
            <h5>Title : {movieDetails.title}</h5>
            <h5>Genre : {movieDetails.genre}</h5>
            <h5>Plot : {movieDetails.plot}</h5>
            <h5>Released : {movieDetails.released}</h5>
            <h5>Director : {movieDetails.director}</h5>
            <h5>Year : {movieDetails.year}</h5>
            <h5>Imdb rating : {movieDetails.imdbRating}</h5>
            <h5>Runtime : {movieDetails.runtime}</h5>
          </section>
        </div>
      ) : (
        "No Movie Selected ..."
      )}
    </div>
  );
}
