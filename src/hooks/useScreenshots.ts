import { useQuery } from "@tanstack/react-query";
import ms from "ms";
import { ApiClient, FetchResponse } from "../services/api-client";
import { Screenshot } from "../entities/Screenshot";

const useScreenshots = (gameId: number) => {
  // FIXME: Is instantiation within this function inefficient?
  // Maybe use tagged templates to solve if so
  const screenshotService = new ApiClient<Screenshot>(
    `/games/${gameId}/screenshots`
  );

  return useQuery<FetchResponse<Screenshot>, Error>({
    queryKey: ["screenshots", gameId],
    queryFn: screenshotService.getAll,
    staleTime: ms("1 day"),
  });
};

export default useScreenshots;
