import staticPlatforms from "../data/platforms";
import { FetchResponse } from "../services/api-client";
import platformService, { Platform } from "../services/platform-service";
import { useQuery } from "@tanstack/react-query";

const usePlatforms = () => {
  const staticData = {
    count: staticPlatforms.length,
    next: null,
    results: staticPlatforms,
  };
  return useQuery<FetchResponse<Platform>, Error>({
    queryKey: ["platforms"],
    queryFn: platformService.getAll,
    staleTime: 24 * 60 * 60 * 1000, // one day
    initialData: staticData,
  });
};

export default usePlatforms;
