import staticPlatforms from "../data/platforms";
import { FetchResponse } from "../services/api-client";
import platformService, { Platform } from "../services/platform-service";
import { useQuery } from "@tanstack/react-query";
import ms from "ms";

const usePlatforms = () => {
  return useQuery<FetchResponse<Platform>, Error>({
    queryKey: ["platforms"],
    queryFn: platformService.getAll,
    staleTime: ms("1 day"),
    initialData: staticPlatforms,
  });
};

export default usePlatforms;
