import { useInfiniteQuery } from "@tanstack/react-query";
import ms from "ms";
import { FetchResponse } from "../services/api-client";
import gameService, { Game } from "../services/game-service";
import useGameQueryStore from "../stores/gameQueryStore";

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
