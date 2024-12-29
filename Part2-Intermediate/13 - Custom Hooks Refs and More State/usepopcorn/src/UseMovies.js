import {useEffect, useState} from "react";

const KEY = "d667dffb";

export function useMovies(query, callback) {

    const [movies, setMovies] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState("");
    useEffect(
        function () {
            callback?.();
            const controller = new AbortController();

            async function fetchMovies() {
                try {
                    setIsLoading(true);
                    setError("");
                    const res = await fetch(
                        `http://www.omdbapi.com/?apikey=${KEY}&s=${query}
      `,
                        {signal: controller.signal}
                    );

                    if (!res.ok)
                        throw new Error("Something went wrong with fetching movies");
                    const data = await res.json();
                    if (data.Response === "False") throw new Error("Movie not found");
                    setMovies(data.Search);
                    console.log(data.Search);
                    // console.log(movies); // this is asunchronous code
                    setError("");
                } catch (err) {
                    console.error(err.message);
                    if (err.name !== "AbortError") {
                        setError(err.message);
                    }
                } finally {
                    setIsLoading(false);
                }
                return function () {
                    controller.abort();
                };
            }

            if (query.length < 3) {
                setMovies([]);
                setError("");
                return;
            }
            // close current movie
            // handleCloseMovie();
            fetchMovies();
        },
        [query]
    );

    return {movies, error, isLoading};
}