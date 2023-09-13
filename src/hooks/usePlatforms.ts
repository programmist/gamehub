import staticPlatforms from "../data/platforms";
import { FetchResponse } from "../services/api-client";
import platformService, { Platform } from "../services/platform-service";
import { useQuery } from "@tanstack/react-query";

const usePlatforms = () => {
  return useQuery<FetchResponse<Platform>, Error>({
    queryKey: ["platforms"],
    queryFn: platformService.getAll,
    staleTime: 24 * 60 * 60 * 1000, // one day
    initialData: staticPlatforms,
  });
};

export default usePlatforms;
