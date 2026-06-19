import React, { useEffect, useState } from "react";

function useFetch(endpoint) {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [data, setData] = useState([]);

  useEffect(() => {
    setLoading(true);
    fetch(endpoint)
      .then((res) => res.json())
      .then((res) => {
        setData(res);
        setError("");
      })
      .catch((err) => {
        setError(err.message || "Something went wrong!");
      })
      .finally(() => {
        setLoading(false);
      });
  }, [endpoint]);

  return { data, loading, error };
}

export default useFetch;
