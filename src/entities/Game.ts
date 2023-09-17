import { Platform } from "./Platform";
import { Entity } from "./Entity";
import { Genre } from "./Genre";
import Publisher from "./Publisher";

export interface Game extends Entity {
  slug: string;
  description: string;
  description_raw: string;
  background_image: string;
  parent_platforms: Array<{ platform: Platform }>;
  genres: Genre[];
  publishers: Publisher[];
  metacritic: number;
  rating_top: number;
}
