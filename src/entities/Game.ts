import { Platform } from "./Platform";
import { Entity } from "./Entity";

export interface Game extends Entity {
  slug: string;
  description: string;
  description_raw: string;
  background_image: string;
  parent_platforms: Array<{ platform: Platform }>;
  metacritic: number;
  rating_top: number;
}
