import { useEffect, useState } from "react";
import { CanceledError } from "../services/api-client";
import create, { Entity } from "../services/http-service";
import { AxiosRequestConfig } from "axios";

function useData<T extends Entity>(
  endpoint: string,
  requestConfig?: AxiosRequestConfig,
  deps?: any
) {
  const [data, setData] = useState<T[]>([]);
  const [error, setError] = useState("");
  const [isLoading, setLoading] = useState(false);
  const service = create<T>(endpoint);

  useEffect(
    () => {
      setLoading(true);
      const { request, cancel } = service.getAll(requestConfig);
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
