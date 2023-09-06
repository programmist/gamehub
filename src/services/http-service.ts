import { AxiosRequestConfig } from "axios";
import apiClient from "./api-client";

export interface Entity {
  id: number;
}

export interface FetchResponse<T> {
  count: number;
  results: T[];
}

class HttpService<T extends Entity> {
  private endpoint: string;

  constructor(endpoint: string) {
    this.endpoint = endpoint;
  }

  getAll(requestConfig?: AxiosRequestConfig) {
    const controller = new AbortController();
    return {
      request: apiClient.get<FetchResponse<T>>(this.endpoint, {
        signal: controller.signal,
        ...requestConfig,
      }),
      cancel: () => controller.abort(),
    };
  }

  get(id: number) {
    const controller = new AbortController();
    return {
      request: apiClient.get<T>(`${this.endpoint}/${id}`, {
        signal: controller.signal,
      }),
      cancel: () => controller.abort(),
    };
  }

  create(entity: T) {
    return apiClient.post(this.endpoint, entity);
  }

  update(entity: T) {
    return apiClient.patch(`${this.endpoint}/${entity.id}`, entity);
  }

  delete(id: number) {
    return apiClient.delete(`${this.endpoint}/${id}`);
  }
}

const create = <T extends Entity>(endpoint: string) => {
  return new HttpService<T>(endpoint);
};

export default create;
