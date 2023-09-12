import axios, { AxiosInstance, AxiosRequestConfig, CanceledError } from "axios";

export interface Entity {
  id: number;
}

export interface FetchResponse<T extends Entity> {
  count: number;
  results: T[];
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
class ApiClient<T extends Entity> {
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

  get = (id: number) => {
    return this.axiosInst.get<T>(`${this.endpoint}/${id}`);
  };
}

export { ApiClient, CanceledError };
