export default function MovieCard({ movie, onSetMovieDetailsMovie }) {
  return (
    <div
      className="MovieCard"
      onClick={() => {
        onSetMovieDetailsMovie(movie.imdbID);
      }}
    >
      <img src={movie.Poster} alt={`pic of ${movie.Title}`} />
      <div className="MovieCard-h3">
        <h3>Title: {movie.Title}</h3>
        <h3>Imdb ID: {movie.imdbID}</h3>
        <h3>Year: {movie.Year}</h3>
      </div>
    </div>
  );
}
