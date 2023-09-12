import { SortOrder } from "../components/SortSelector";
import { ApiClient, Entity } from "./api-client";
import { Genre } from "./genre-service";
import { Platform } from "./platform-service";

export interface Game extends Entity {
  name: string;
  background_image: string;
  parent_platforms: Array<{ platform: Platform }>;
  metacritic: number;
  rating_top: number;
}

export interface GameQuery {
  search: string;
  genre: Genre | null;
  platform: Platform | null;
  order: SortOrder;
}

export default new ApiClient<Game>("/games");
