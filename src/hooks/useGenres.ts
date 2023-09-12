import { useQuery } from "@tanstack/react-query";
import genreService, { Genre } from "../services/genre-service";
import staticGenres from "../data/genres";

const useGenres = (useLiveData = true) => {
  return useLiveData
    ? useQuery<Genre[], Error>({
        queryKey: ["genres"],
        queryFn: genreService.getAll,
        staleTime: 24 * 60 * 60 * 1000, // one day
      })
    : {
        data: staticGenres,
        isLoading: false,
        error: null,
      };
};

export default useGenres;
