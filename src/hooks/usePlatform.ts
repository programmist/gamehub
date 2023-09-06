import { Entity } from "../services/http-service";

export interface Platform extends Entity {
  name: string;
  slug: string;
}
