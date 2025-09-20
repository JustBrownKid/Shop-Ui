import { useState, useEffect, useCallback } from "react";

export function useApi(url, options = {}, immediate = true) {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const fetchData = useCallback(async (overrideOptions = {}) => {
    setLoading(true);
    setError(null);

    try {
      const response = await fetch(url, { ...options, ...overrideOptions });
      if (!response.ok) {
        throw new Error(`Error ${response.status}: ${response.statusText}`);
      }
      const result = await response.json();
      setData(result);
    } catch (err) {
      setError(err.message || "Something went wrong");
    } finally {
      setLoading(false);
    }
  }, [url]); // 🔥 only depend on url

  useEffect(() => {
    if (immediate) {
      fetchData();
    }
  }, [fetchData, immediate]);

  return { data, error, loading, refetch: fetchData };
}
