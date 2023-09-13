import { FetchResponse } from "../services/api-client";
import gameService, { Game, GameQuery } from "../services/game-service";
import { useInfiniteQuery } from "@tanstack/react-query";

const useGames = (gameQuery: GameQuery) => {
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
    staleTime: 24 * 60 * 60 * 1000, // 24hrs
    keepPreviousData: true,
    getNextPageParam: (lastPage, allPages) => {
      return lastPage.next ? allPages.length + 1 : undefined;
    },
  });
};

export default useGames;
