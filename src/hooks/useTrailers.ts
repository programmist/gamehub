import { useQuery } from "@tanstack/react-query";
import ms from "ms";
import Trailer from "../entities/Trailer";
import { ApiClient, FetchResponse } from "../services/api-client";

const useTrailers = (slug: string) => {
  // FIXME: Is instantiation within this function inefficient?
  // Maybe use tagged templates to solve if so
  const trailerService = new ApiClient<Trailer>(`/games/${slug}/movies`);

  return useQuery<FetchResponse<Trailer>, Error>({
    queryKey: ["trailers", slug],
    queryFn: trailerService.getAll,
    staleTime: ms("1 day"),
  });
};

export default useTrailers;
