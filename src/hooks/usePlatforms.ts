import staticPlatforms from "../data/platforms";
import { ApiClient, FetchResponse } from "../services/api-client";
import { useQuery } from "@tanstack/react-query";
import ms from "ms";
import Platform from "../entities/Platform";

const platformService = new ApiClient<Platform>("/platforms/lists/parents");

const usePlatforms = () => {
  return useQuery<FetchResponse<Platform>, Error>({
    queryKey: ["platforms"],
    queryFn: platformService.getAll,
    staleTime: ms("1 day"),
    initialData: staticPlatforms,
  });
};

export default usePlatforms;
