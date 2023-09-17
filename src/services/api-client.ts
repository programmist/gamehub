import axios, { AxiosInstance, AxiosRequestConfig } from "axios";

export interface Entity {
  id: number;
  name: string;
}

export interface FetchResponse<T extends Entity> {
  count: number;
  next: string | null;
  results: T[];
}

export function getEntity<T extends Entity>(
  entityList: T[],
  entityId?: number
) {
  return entityList.find((entity) => entityId === entity.id);
}

const createAxiosInstance = () => {
  return axios.create({
    baseURL: "https://api.rawg.io/api",
    params: {
      key: import.meta.env.VITE_RAWG_API_KEY,
    },
  });
};

/**
 * APiClient simplifies and encapsulates accessing data from the various rawg.io API endpoints
 */
export class ApiClient<T extends Entity> {
  /**
   *
   * @param endpoint The endpoint of the Entity type of this client
   * @param axiosInst The AxiosInstance used to make HTTP calls
   */
  constructor(
    private endpoint: string,
    private axiosInst: AxiosInstance = createAxiosInstance()
  ) {}

  getAll = (requestConfig?: AxiosRequestConfig) => {
    return this.axiosInst
      .get<FetchResponse<T>>(this.endpoint, {
        ...requestConfig,
      })
      .then((res) => res.data);
  };

  get = (slug: string) => {
    return this.axiosInst
      .get<T>(`${this.endpoint}/${slug}`)
      .then((res) => res.data);
  };
}
