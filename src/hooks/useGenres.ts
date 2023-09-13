import { useQuery } from "@tanstack/react-query";
import genreService, { Genre } from "../services/genre-service";
import { FetchResponse } from "../services/api-client";
import staticGenres from "../data/genres";

const useGenres = () => {
  const staticData = {
    count: staticGenres.length,
    next: null,
    results: staticGenres,
  };
  return useQuery<FetchResponse<Genre>, Error>({
    queryKey: ["genres"],
    queryFn: genreService.getAll,
    staleTime: 24 * 60 * 60 * 1000, // one day
    initialData: staticData,
  });
};

export default useGenres;
