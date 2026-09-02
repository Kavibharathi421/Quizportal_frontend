import { useEffect, useState } from "react";
import { apiRequest } from "./useApi";

export function useLoad(path) {
  const [data, setData] = useState(null);
  const [reloadToken, setReloadToken] = useState(0);

  useEffect(() => {
    let active = true;

    apiRequest(path)
      .then((result) => {
        if (active) setData(result);
      })
      .catch(() => {
        if (active) setData(null);
      });

    return () => {
      active = false;
    };
  }, [path, reloadToken]);

  return [data, () => setReloadToken((value) => value + 1)];
}
