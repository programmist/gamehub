import staticPlatforms from "../data/platforms";
import platformService, { Platform } from "../services/platform-service";
import { useQuery } from "@tanstack/react-query";

const usePlatforms = (useLiveData = true) => {
  return useLiveData
    ? useQuery<Platform[], Error>({
        queryKey: ["platforms"],
        queryFn: platformService.getAll,
        staleTime: 24 * 60 * 60 * 1000, // one day
      })
    : {
        data: staticPlatforms,
        isLoading: false,
        error: null,
      };
};

export default usePlatforms;
