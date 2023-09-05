import { useEffect, useState } from "react";
import { CanceledError } from "axios";
import genreService, { Genre } from "../services/genre-service";

// TODO: Refactor hook to make it generic (useEntity)?
function useGenres() {
  const [genres, setGenres] = useState<Genre[]>([]);
  const [error, setError] = useState("");
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    const { request, cancel } = genreService.getAll();
    request
      .then((res) => setGenres(res.data.results))
      .catch((err) => {
        if (err instanceof CanceledError) return;
        setError(err.message);
      })
      .finally(() => {
        // FIXME: Testing loading state. Remove me.
        setTimeout(() => {
          setLoading(false);
        }, 1000);
      });

    return cancel;
  });
  return { genres, error, isLoading };
}

export default useGenres;
