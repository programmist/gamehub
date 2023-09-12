import axios, { AxiosInstance, AxiosRequestConfig, CanceledError } from "axios";

export interface Entity {
  id: number;
}

export interface FetchResponse<T> {
  count: number;
  results: T[];
}

/**
 * APiClient simplifies and encapsulates accessing data from the various rawg.io API endpoints
 */
class ApiClient<T extends Entity> {
  /**
   *
   * @param endpoint The endpoint of the Entity type of this client
   * @param axiosInst The AxiosInstance used to make HTTP calls
   */
  constructor(private endpoint: string, private axiosInst: AxiosInstance) {}

  getAll(requestConfig?: AxiosRequestConfig) {
    const controller = new AbortController();
    return {
      request: this.axiosInst.get<FetchResponse<T>>(this.endpoint, {
        signal: controller.signal,
        ...requestConfig,
      }),
      cancel: () => controller.abort(),
    };
  }

  get(id: number) {
    const controller = new AbortController();
    return {
      request: this.axiosInst.get<T>(`${this.endpoint}/${id}`, {
        signal: controller.signal,
      }),
      cancel: () => controller.abort(),
    };
  }

  create(entity: T) {
    return this.axiosInst.post(this.endpoint, entity);
  }

  update(entity: T) {
    return this.axiosInst.patch(`${this.endpoint}/${entity.id}`, entity);
  }

  delete(id: number) {
    return this.axiosInst.delete(`${this.endpoint}/${id}`);
  }
}

// Default AxiosInstance
const axiosInst = axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: import.meta.env.VITE_RAWG_API_KEY,
  },
});

/**
 *
 * Convenience function to get an ApiClient instance with the default AxiosInstance.
 * Use the ApiClient constructor to inject a different axiosInstance;
 */
const create = <T extends Entity>(endpoint: string) => {
  return new ApiClient<T>(endpoint, axiosInst);
};

export default create;

export { ApiClient, CanceledError };
