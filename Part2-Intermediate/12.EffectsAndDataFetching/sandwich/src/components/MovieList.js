import MovieCard from "./MovieCard";

export default function MovieList({ movies, onSetMovieDetailsMovie }) {
  return (
    <div className="MovieList">
      {movies.map((movie) => (
        <div>
          <MovieCard
            movie={movie}
            key={movie.Title}
            onSetMovieDetailsMovie={onSetMovieDetailsMovie}
          />
        </div>
      ))}
    </div>
  );
}
