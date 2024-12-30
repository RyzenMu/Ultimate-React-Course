import {useEffect, useRef, useState} from "react";
import StarRating from "./StarRating";
import {useMovies} from "./UseMovies";
import {useLocalStorageState} from "./useLocalStorageState";
import {useKey} from "./useKey";


const average = (arr) =>
    arr.reduce((acc, cur, i, arr) => acc + cur / arr.length, 0);

function Navbar({children}) {
    <Logo/>;
    return (
        <nav className="nav-bar">
            <Logo/>

            {children}
        </nav>
    );
}

function NumResults({movies}) {
    return (
        <p className="num-results">
            {/* Found <strong>{movies.length}</strong> results */}
        </p>
    );
}

function Logo() {
    return (
        <div className="logo">
            <span role="img">🍿</span>
            <h1>usePopcorn</h1>
        </div>
    );
}

function Search({query, setQuery}) {
    const inputEl = useRef(null);


    useKey('Enter', function(){
        if (document.activeElement === inputEl.current) {
            return;}

        inputEl.current.focus();
        setQuery('');
    })
    // useEffect(() => {
    //
    //     function callback(e) {
    //         if (document.activeElement === inputEl.current) {
    //             return;
    //         }
    //         if (e.code === "Enter") {
    //
    //             inputEl.current.focus();
    //             setQuery('');
    //         }
    //     }
    //
    //     document.addEventListener('keydown', callback)
    //     return document.addEventListener('keydown', callback);
    // }, [setQuery]);


//     useEffect(function() {
//         const el = document.querySelector('.search');
//         el.focus();
// }, [])

    return (
        <input
            className="search"
            type="text"
            placeholder="Search movies..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            ref={inputEl}
        />
    );
}

function Main({children}) {
    return <main className="main">{children}</main>;
}

export default function App() {
    // const [movies, setMovies] = useState([]);
    // const [isLoading, setIsLoading] = useState(false);
    // const [error, setError] = useState("");
    const [query, setQuery] = useState("");
    const [selectedId, setSelectedId] = useState(null);
    // const [watched, setWatched] = useState(function () {
    //     const storedvalue = localStorage.getItem("watched");
    //     return JSON.parse(storedvalue);
    // });

    const [watched, setWatched] = useLocalStorageState([], 'watched');


    const KEY = "d667dffb";
    const tempQuery = "interstellar";


    function handleSelectMovie(id) {
        setSelectedId((selectedId) => (id === selectedId ? null : id));
    }

    function handleCloseMovie() {
        setSelectedId(null);
    }

    function handleAddWatched(movie) {
        setWatched((watched) => [...watched, movie]);
        localStorage.setItem('watched', JSON.stringify([...watched, movie]));
    }


    function handleDeleteWatched(id) {
        setWatched((watched) => watched.filter((movie) => movie.imdbID !== id));
    }
    const {movies, isLoading, error} = useMovies(query, handleCloseMovie);

    // useEffect(function () {
    //
    //     localStorage.setItem('watched', JSON.stringify([...watched, movies]));
    //
    // }, [movies, watched, query, selectedId])


    // useEffect(
    //     function () {
    //         const controller = new AbortController();
    //
    //         async function fetchMovies() {
    //             try {
    //                 setIsLoading(true);
    //                 setError("");
    //                 const res = await fetch(
    //                     `http://www.omdbapi.com/?apikey=${KEY}&s=${query}
    //   `,
    //                     {signal: controller.signal}
    //                 );
    //
    //                 if (!res.ok)
    //                     throw new Error("Something went wrong with fetching movies");
    //                 const data = await res.json();
    //                 if (data.Response === "False") throw new Error("Movie not found");
    //                 setMovies(data.Search);
    //                 console.log(data.Search);
    //                 // console.log(movies); // this is asunchronous code
    //                 setError("");
    //             } catch (err) {
    //                 console.error(err.message);
    //                 if (err.name !== "AbortError") {
    //                     setError(err.message);
    //                 }
    //             } finally {
    //                 setIsLoading(false);
    //             }
    //             return function () {
    //                 controller.abort();
    //             };
    //         }
    //
    //         if (query.length < 3) {
    //             setMovies([]);
    //             setError("");
    //             return;
    //         }
    //         // close current movie
    //         handleCloseMovie();
    //         fetchMovies();
    //     },
    //     [query]
    // );

    return (
        <>
            <Navbar>
                {" "}
                <Search query={query} setQuery={setQuery}/>
                <NumResults movies={movies}/>
            </Navbar>
            <Main>
                {/* <Box>{isLoading ? <Loader /> : <MovieList movies={movies} />}</Box> */}
                <Box>
                    {isLoading && <Loader/>}
                    {!isLoading && !error && (
                        <MovieList movies={movies} onSelectMovie={handleSelectMovie}/>
                    )}
                    {error && <ErrorMessage message={error}/>}
                </Box>
                <Box>
                    {selectedId ? (
                        <MovieDetails
                            selectedId={selectedId}
                            onCloseMovie={handleCloseMovie}
                            onAddWatched={handleAddWatched}
                            watched={watched}
                        />
                    ) : (
                        <>
                            <WatchedSummary watched={watched}/>
                            <WatchedMoviesList
                                watched={watched}
                                onDeleteWatched={handleDeleteWatched}
                            />
                        </>
                    )}
                </Box>
                {/* <Box element={<MovieList movies={movies} />} />
        <Box
          element={
            <>
              <WatchedSummary watched={watched} />{" "}
              <WatchedMoviesList watched={watched} />
            </>
          }
        /> */}
            </Main>
        </>
    );
}

function Loader() {
    return <p className="loader">Loading... </p>;
}

function ErrorMessage({message}) {
    return (
        <p className="error">
            <span>😟{message}😡</span>
        </p>
    );
}

function Box({children}) {
    const [isOpen, setIsOpen] = useState(true);

    return (
        <div className="box">
            <button className="btn-toggle" onClick={() => setIsOpen((open) => !open)}>
                {isOpen ? "–" : "+"}
            </button>
            {isOpen && children}
        </div>
    );
}

/*
function WatchedBox() {
  const [watched, setWatched] = useState(tempWatchedData);
  const [isOpen2, setIsOpen2] = useState(true);

  return (
    <div className="box">
      <button
        className="btn-toggle"
        onClick={() => setIsOpen2((open) => !open)}
      >
        {isOpen2 ? "–" : "+"}
      </button>
      {isOpen2 && (
        <>
          <WatchedSummary watched={watched} />
          <WatchedMoviesList watched={watched} />
        </>
      )}
    </div>
  );
}
  */

function MovieList({movies, onSelectMovie}) {
    return (
        <ul className="list list-movies">
            {movies?.map((movie) => (
                <Movie movie={movie} key={movie.imdbID} onSelectMovie={onSelectMovie}/>
            ))}
        </ul>
    );
}

function Movie({movie, onSelectMovie}) {
    return (
        <li onClick={() => onSelectMovie(movie.imdbID)}>
            <img src={movie.Poster} alt={`${movie.Title} poster`}/>
            <h3>{movie.Title}</h3>
            <div>
                <p>
                    <span>🗓</span>
                    <span>{movie.Year}</span>
                </p>
            </div>
        </li>
    );
}

function MovieDetails({selectedId, onCloseMovie, onAddWatched, watched}) {
    const KEY = "d667dffb";
    const [movie, setMovie] = useState({});
    const [isLoading, setIsLoading] = useState(false);
    const [userRating, setUserRating] = useState("");
    const isWatched = watched.map((movie) => movie.imdbID).includes(selectedId);
    const watchedUserRating = watched.find(
        (movie) => movie.imdbID === selectedId
    )?.userRating;

    const countRef = useRef(0);
    useEffect(() => {
        if (userRating){

        countRef.current = countRef.current + 1;
        }
    }, [userRating]);

    const {
        Title: title,
        Year: year,
        Poster: poster,
        Runtime: runtime,
        imdbRating,
        Plot: plot,
        Released: released,
        Actors: actors,
        Director: director,
        Genre: genre,
    } = movie;

    /* eslint-disable */
    // if (imdbRating >8 ) [isTop, setIsTop] = useState(true);
    //
    // const [isTop, setIsTop] = useState(imdbRating >8);
    //
    // useEffect(
    //     function() {
    //         setIsTop(imdbRating > 8);
    //     }, [imdbRating]
    // )

    const isTop = imdbRating > 8;
    console.log("is top", isTop);

    // early return
    // if (imdbRating > 8) return <p>Greatest Ever</p>

    const [averageRating, setAverageRating] = useState(0);


    console.log(title, year);

    function handleAdd() {
        const newWatchedMovie = {
            imdbID: selectedId,
            title,
            year,
            imdbRating: Number(imdbRating),
            runtime: Number(runtime.split(" ").at(0)),
            userRating,
            countRatingDecisions  : countRef.current,
        };
        onAddWatched(newWatchedMovie);
        // onCloseMovie();
        setAverageRating(Number(imdbRating));
        // alert(averageRating);
        setAverageRating(averageRating => (averageRating + userRating) / 2);
    }

    useKey('Escape', onCloseMovie);

    // useEffect(
    //     function () {
    //         function callback(e) {
    //             if (e.code === "Escape") {
    //                 onCloseMovie();
    //                 console.log("CLOSING BY PRESSING ESCAPE KEY");
    //             }
    //         }
    //
    //         document.addEventListener("keydown", callback);
    //
    //         return function () {
    //             document.removeEventListener("keydown", callback);
    //         };
    //     },
    //     [onCloseMovie]
    // );

    useEffect(
        function () {
            async function getMovieDetails() {
                setIsLoading(true);
                const res = await fetch(
                    `http://www.omdbapi.com/?apikey=${KEY}&i=${selectedId}
`
                );
                const data = await res.json();
                console.log(data);
                setMovie(data);
                setIsLoading(false);
            }

            getMovieDetails(selectedId);
            // clean up function
        },
        [selectedId]
    );

    useEffect(
        function () {
            if (!title) return;
            document.title = `Movie | ${title}`;
            return function () {
                document.title = "UsePopcorn";
                console.log(`clean up title :${title}`);
            };
        },
        [title]
    );

    return (
        <div className="details">
            {isLoading ? (
                <Loader/>
            ) : (
                <>
                    <header>
                        <button className="btn-back" onClick={onCloseMovie}>
                            &larr;
                        </button>
                        <img src={poster} alt={`poster of ${title}`}/>
                        <div className="details-overview">
                            <h2>{title}</h2>
                            <p>
                                {released} &bull; {runtime}
                            </p>
                            <p>{genre}</p>
                            <p>
                                <span>⭐</span>
                                {imdbRating} IMDB rating
                            </p>
                        </div>
                    </header>
                    <p>Average rating : {averageRating}</p>
                    <section>
                        <div className="rating">
                            {isWatched ? (
                                <>
                                    <StarRating
                                        maxRating={10}
                                        size={24}
                                        onSetRating={setUserRating}
                                    />
                                    {userRating > 0 && (
                                        <button className="btn-add" onClick={handleAdd}>
                                            {" "}
                                            + Add to list
                                        </button>
                                    )}
                                </>
                            ) : (
                                <p>
                                    You rated this movie with {watchedUserRating}
                                    <span>⭐</span>
                                </p>
                            )}
                        </div>
                        <p>
                            <em>{plot}</em>{" "}
                        </p>
                        <p> Starring {actors}</p>
                        <p>Directed by : {director}</p>
                    </section>
                </>
            )}
        </div>
    );
}

function WatchedSummary({watched}) {
    const avgImdbRating = average(watched.map((movie) => movie.imdbRating));
    const avgUserRating = average(watched.map((movie) => movie.userRating));
    const avgRuntime = average(watched.map((movie) => movie.runtime));
    return (
        <div className="summary">
            <h2>Movies you watched</h2>
            <div>
                <p>
                    <span>#️⃣</span>
                    <span>{watched.length} movies</span>
                </p>
                <p>
                    <span>⭐️</span>
                    <span>{avgImdbRating.toFixed(2)}</span>
                </p>
                <p>
                    <span>🌟</span>
                    <span>{avgUserRating.toFixed(2)}</span>
                </p>
                <p>
                    <span>⏳</span>
                    <span>{avgRuntime} min</span>
                </p>
            </div>
        </div>
    );
}

function WatchedMoviesList({watched, onDeleteWatched}) {
    return (
        <ul className="list">
            {watched.map((movie, index) => (
                <WatchedMovie
                    movie={movie}
                    key={movie.imdbID}
                    onDeleteWatched={onDeleteWatched}
                />
            ))}
        </ul>
    );
}

function WatchedMovie({movie, onDeleteWatched}) {
    return (
        <li key={movie.imdbID}>
            <img src={movie.poster} alt={`${movie.title} poster`}/>
            <h3>{movie.title}</h3>
            <div>
                <p>
                    <span>⭐️</span>
                    <span>{movie.imdbRating}</span>
                </p>
                <p>
                    <span>🌟</span>
                    <span>{movie.userRating}</span>
                </p>
                <p>
                    <span>⏳</span>
                    <span>{movie.runtime} min</span>
                </p>
            </div>
            <button
                className="btn-delete"
                onClick={() => onDeleteWatched(movie.imdbID)}
            >
                {" "}
                X
            </button>
        </li>
    );
}