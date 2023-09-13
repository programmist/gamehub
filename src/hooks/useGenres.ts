import { useQuery } from "@tanstack/react-query";
import genreService, { Genre } from "../services/genre-service";
import { FetchResponse } from "../services/api-client";
import staticGenres from "../data/genres";
import ms from "ms";

const useGenres = () => {
  return useQuery<FetchResponse<Genre>, Error>({
    queryKey: ["genres"],
    queryFn: genreService.getAll,
    staleTime: ms("1 day"),
    initialData: staticGenres,
  });
};

export default useGenres;
