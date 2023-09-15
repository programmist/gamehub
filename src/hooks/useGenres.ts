import { useQuery } from "@tanstack/react-query";
import { ApiClient, Entity, FetchResponse } from "../services/api-client";
import staticGenres from "../data/genres";
import ms from "ms";

export interface Genre extends Entity {
  image_background: string;
}

const genreService = new ApiClient<Genre>("/genres");

const useGenres = () => {
  return useQuery<FetchResponse<Genre>, Error>({
    queryKey: ["genres"],
    queryFn: genreService.getAll,
    staleTime: ms("1 day"),
    initialData: staticGenres,
  });
};

export default useGenres;
