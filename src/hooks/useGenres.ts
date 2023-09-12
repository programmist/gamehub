import { useQuery } from "@tanstack/react-query";
import genreService, { Genre } from "../services/genre-service";
import staticGenres from "../data/genres";
import { FetchResponse } from "../services/api-client";
import genres from "../data/genres";

const useGenres = (useLiveData = true) => {
  const staticData = { count: genres.length, results: staticGenres };
  return useLiveData
    ? useQuery<FetchResponse<Genre>, Error>({
        queryKey: ["genres"],
        queryFn: genreService.getAll,
        staleTime: 24 * 60 * 60 * 1000, // one day
        initialData: staticData,
      })
    : {
        data: staticData,
        isLoading: false,
        error: null,
      };
};

export default useGenres;
