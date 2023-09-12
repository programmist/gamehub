import { useEffect, useState } from "react";
import { CanceledError, FetchResponse } from "../services/api-client";
import { Entity } from "../services/api-client";
import axios, { AxiosRequestConfig } from "axios";

/**
 * DELETE THIS HOOK ONCE REFACTOR COMPLETE
 */
const axiosInst = axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: import.meta.env.VITE_RAWG_API_KEY,
  },
});

function useData<T extends Entity>(
  endpoint: string,
  requestConfig?: AxiosRequestConfig,
  deps?: any
) {
  const [data, setData] = useState<T[]>([]);
  const [error, setError] = useState("");
  const [isLoading, setLoading] = useState(false);

  const getAll = (requestConfig?: AxiosRequestConfig) => {
    const controller = new AbortController();
    return {
      request: axiosInst.get<FetchResponse<T>>(endpoint, {
        signal: controller.signal,
        ...requestConfig,
      }),
      cancel: () => controller.abort(),
    };
  };

  useEffect(
    () => {
      setLoading(true);
      const { request, cancel } = getAll(requestConfig);
      request
        .then((res) => setData(res.data.results))
        .catch((err) => {
          if (err instanceof CanceledError) return;
          setError(err.message);
        })
        .finally(() => {
          // FIXME: Delay to test loading state. Remove me.
          setTimeout(() => {
            setLoading(false);
          }, 1000);
        });

      return cancel;
    },
    deps ? [...deps] : []
  );

  return { data, error, isLoading };
}

export default useData;
