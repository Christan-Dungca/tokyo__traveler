import { useState, useCallback } from "react";
import axios from "axios";

const useHttpClient = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);

  const clearError = () => {
    setError(false);
  };

  const sendRequest = useCallback(
    async (url, method = "GET", body = null, headers = {}) => {
      setIsLoading(true);

      try {
        const response = await axios({
          url,
          method,
          body,
          headers,
        });

        if (!response.statusText === "OK") {
          throw new Error("Error getting resource");
        }

        //   console.log(response.data.data);
        setIsLoading(false);
        return response.data.data;
      } catch (err) {
        setError(true);
        setIsLoading(false);
        console.log(err);
        throw err;
      }
    },
    []
  );

  return { isLoading, error, clearError, sendRequest };
};

export default useHttpClient;
