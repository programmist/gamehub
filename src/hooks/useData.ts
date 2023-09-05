import { useEffect, useState } from "react";
import { CanceledError } from "../services/api-client";
import create, { Entity } from "../services/http-service";

function useData<T extends Entity>(endpoint: string) {
  const [data, setData] = useState<T[]>([]);
  const [error, setError] = useState("");
  const [isLoading, setLoading] = useState(false);
  const service = create<T>(endpoint);

  useEffect(() => {
    setLoading(true);
    const { request, cancel } = service.getAll();
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
  }, []);

  return { data, error, isLoading };
}

export default useData;
