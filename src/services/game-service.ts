import { SortOrder } from "../components/SortSelector";
import { ApiClient, Entity } from "./api-client";
import { Genre } from "./genre-service";
import { Platform } from "./platform-service";

export interface Game extends Entity {
  background_image: string;
  parent_platforms: Array<{ platform: Platform }>;
  metacritic: number;
  rating_top: number;
}

export interface GameQuery {
  search: string;
  genreId?: number;
  platformId?: number;
  order: SortOrder;
  pageSize: number;
}

export default new ApiClient<Game>("/games");
