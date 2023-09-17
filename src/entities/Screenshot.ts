import Entity from "./Entity";

export default interface Screenshot extends Entity {
  image: string;
  hidden: boolean;
  width: number;
  height: number;
}
