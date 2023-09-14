import { SortOrder } from "../components/SortSelector";
import { GameQuery } from "../services/game-service";

interface PlatformUpdateAction {
  type: "PLATFORM_UPDATE";
  platformId: number;
}

interface GenreUpdateAction {
  type: "GENRE_UPDATE";
  genreId: number;
}

interface SearchUpdateAction {
  type: "SEARCH_UPDATE";
  search: string;
}

interface SortUpdateAction {
  type: "SORT_UPDATE";
  order: SortOrder;
}

type GameQueryAction =
  | PlatformUpdateAction
  | GenreUpdateAction
  | SearchUpdateAction
  | SortUpdateAction;

const gameQueryReducer = (gameQuery: GameQuery, action: GameQueryAction) => {
  switch (action.type) {
    case "PLATFORM_UPDATE":
      return { ...gameQuery, platformId: action.platformId };
    case "GENRE_UPDATE":
      return { ...gameQuery, genreId: action.genreId };
    case "SEARCH_UPDATE":
      return action.search !== gameQuery.search
        ? { ...gameQuery, search: action.search }
        : gameQuery;
    case "SORT_UPDATE":
      return { ...gameQuery, order: action.order };
    default:
      return gameQuery;
  }
};

export default gameQueryReducer;
