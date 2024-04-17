import { useEffect } from "react";
import { useGetFakeApi } from "../../../services/__apis__/FakeAPI/GET_FAKE_API";

export default function useTest() {
  const { data, handleGetFakeAPI } = useGetFakeApi();
  useEffect(() => {
    var controller = new AbortController();
    handleGetFakeAPI(1, controller.signal);
    return () => {
      controller.abort();
    };
  }, []);

  return { data };
}
