import { useEffect, useState } from "react";

const KEY = "7ee345aa";

export function useMovies(query) {
  const [movies, setMovies] = useState([]);
  const [isloading, setIsLoading] = useState(false);
  const [error, setErr] = useState("");

  useEffect(
    function () {
      //   callback?.();
      const controller = new AbortController();
      async function fetchMovies() {
        try {
          setIsLoading(true);
          setErr("");
          const res = await fetch(
            `http://www.omdbapi.com/?apikey=${KEY}&s=${query}`,
            { signal: controller.signal }
          );
          if (!res.ok) {
            throw new Error("Something went wrong with fetching movies");
          }

          const data = await res.json();
          if (data.Response === "False") {
            throw new Error("Movie not found");
          }
          setMovies(data.Search);
          setErr("");
          // console.log(data.Search);
        } catch (e) {
          // console.error(e.message);
          if (e.name !== "AbortError") {
            setErr(e.message);
          }
        } finally {
          setIsLoading(false);
        }
      }
      if (query === null || query.length <= 3) {
        setMovies([]);
        setErr("");
        return;
      }
      //   handleCloseMovie();
      fetchMovies();
      return function () {
        controller.abort();
      };
    },
    [query]
  );
  return { movies, isloading, error };
}
