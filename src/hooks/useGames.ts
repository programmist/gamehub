import { useInfiniteQuery } from "@tanstack/react-query";
import ms from "ms";
import { ApiClient, Entity, FetchResponse } from "../services/api-client";
import useGameQueryStore from "../stores/gameQueryStore";
import { Platform } from "./usePlatforms";

export interface Game extends Entity {
  background_image: string;
  parent_platforms: Array<{ platform: Platform }>;
  metacritic: number;
  rating_top: number;
}

const gameService = new ApiClient<Game>("/games");

const useGames = () => {
  const gameQuery = useGameQueryStore((store) => store.gameQuery);

  return useInfiniteQuery<FetchResponse<Game>, Error>({
    queryKey: ["games", gameQuery],
    queryFn: ({ pageParam = 1 }) =>
      gameService.getAll({
        params: {
          page: pageParam,
          pageSize: gameQuery.pageSize,
          genres: gameQuery?.genreId,
          parent_platforms: gameQuery?.platformId,
          ordering: gameQuery.order.value,
          search: gameQuery?.search,
        },
      }),
    staleTime: ms("24 hrs"),
    keepPreviousData: true,
    getNextPageParam: (lastPage, allPages) => {
      return lastPage.next ? allPages.length + 1 : undefined;
    },
  });
};

export default useGames;
