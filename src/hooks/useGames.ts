import { useInfiniteQuery } from "@tanstack/react-query";
import ms from "ms";
import { ApiClient, FetchResponse } from "../services/api-client";
import { Game } from "../entities/Game";
import useGameQueryStore from "../stores/gameQueryStore";

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
          ordering: gameQuery?.order?.value,
          search: gameQuery?.searchText,
        },
      }),
    staleTime: ms("24 hrs"),
    keepPreviousData: true,
    getNextPageParam: (lastPage, allPages) => {
      return lastPage.next ? allPages.length + 1 : undefined;
    },
  });
};

export { gameService };

export default useGames;
