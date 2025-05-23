import MovieDetails from "./MovieDetails";
import MovieList from "./MovieList";
import LoadingMovieDetails from "./LoadingMovingDetails";
export default function Main({
  movies,
  onSetMovieDetailsMovie,
  movieDetailsMovie,
}) {
  return (
    <div className="Main">
      <MovieList
        movies={movies}
        onSetMovieDetailsMovie={onSetMovieDetailsMovie}
      />
      {movieDetailsMovie ? (
        <MovieDetails movieDetailsMovie={movieDetailsMovie} />
      ) : (
        <LoadingMovieDetails />
      )}
    </div>
  );
}
