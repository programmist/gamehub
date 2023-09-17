import Entity from "./Entity";

interface TrailerData {
  480: string;
  max: string;
}

export default interface Trailer extends Entity {
  preview: string;
  data: TrailerData;
}
