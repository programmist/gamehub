import { ApiClient, Entity } from "./api-client";

export interface Platform extends Entity {
  name: string;
  slug: string;
}

export default new ApiClient<Platform>("/platforms/lists/parents");
