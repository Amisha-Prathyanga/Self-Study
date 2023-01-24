import { useEffect, useState } from "react";

const useFetch = (url) => {
    
  const [data, setData] = useState(null);

  const [isPending, setIsPennding] = useState(true);

  const [error, setError] = useState(null);

    useEffect(() => {
        setTimeout(() => {
          fetch(url)
            .then((res) => {
              if (!res.ok) {
                throw Error("Could not fetch data from the source");
              }
              return res.json();
            })
            .then((data) => {
              setData(data);
              setIsPennding(false);
              setError(null);
            })
            .catch((err) => {
              setIsPennding(false);
              setError(err.message);
            });
        }, 1000);
      }, [url]);

      return {data, isPending, error}
}

export default useFetch;