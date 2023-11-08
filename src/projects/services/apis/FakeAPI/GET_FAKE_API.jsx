import axiosInstance from "../../configuration/AxiosInstance";
import useAPI from "../../hooks/useAPI";

const endPoint = "/todos";

function useGetFakeApi() {
  const { data, isLoading, error, setData, setError, setIsloading } = useAPI();

  const handleGetFakeAPI = async(id,signal) => {
    setIsloading(true);
    await axiosInstance().get(`${endPoint}/${id}`,{signal:signal})
      .then((res) => {
        setData(res?.data);
        setIsloading(false);
      })
      .catch((err) => {
        setError(err);
        setIsloading(false);
      });
  };

  return {data,error,isLoading,handleGetFakeAPI}
}

export { useGetFakeApi };
