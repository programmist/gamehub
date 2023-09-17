import { Entity } from "./Entity";

export interface Screenshot extends Entity {
  image: string;
  hidden: boolean;
  width: number;
  height: number;
}
