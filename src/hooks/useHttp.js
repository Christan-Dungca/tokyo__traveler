import { useState, useCallback } from "react";
import axios from "axios";

const useHttpClient = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);

  const clearError = () => {
    setError(false);
  };

  const sendRequest = useCallback(
    async (url, method = "get", body = {}, headers = {}, params = {}) => {
      setIsLoading(true);

      try {
        const response = await axios(
          {
            method,
            url,
            data: body,
            headers,
          },
          { params }
        );

        if (!response.statusText === "OK") {
          // setIsLoading(false);
          // setError(true);
          // throw new Error("Error getting resource");
          console.log("response" + response);
          return response;
        }

        console.log(response);
        // console.log(response.data.data);
        setIsLoading(false);
        return response.data;
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
