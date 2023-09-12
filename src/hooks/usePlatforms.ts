import staticPlatforms from "../data/platforms";
import { FetchResponse } from "../services/api-client";
import platformService, { Platform } from "../services/platform-service";
import { useQuery } from "@tanstack/react-query";

const usePlatforms = (useLiveData = true) => {
  const staticData = {
    count: staticPlatforms.length,
    results: staticPlatforms,
  };
  return useLiveData
    ? useQuery<FetchResponse<Platform>, Error>({
        queryKey: ["platforms"],
        queryFn: platformService.getAll,
        staleTime: 24 * 60 * 60 * 1000, // one day
        initialData: staticData,
      })
    : {
        data: staticData,
        isLoading: false,
        error: null,
      };
};

export default usePlatforms;
