import { useState } from "react";

export default function useAPI() {
  const [data, setData] = useState(null);
  const [isLoading, setIsloading] = useState(true);
  const [error, setError] = useState(null);

  return { data, isLoading, error, setData, setIsloading, setError };
}
