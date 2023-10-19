import axios from "axios";
import { useState } from "react";

export default function useGetApi() {
    const [response, setResponse] = useState();
    const [error, setError] = useState();
    const [loading, setLoading] = useState(false);
    const controller = new AbortController();

    const handleGetApi = (url) => {
        axios.get(url, {
            signal: controller.signal
        }).then(res => {
            setResponse(res);
        }).catch(err => {
            setError(err)
        }).finally(() => {
            setLoading(false)
        })
    }

    const handleCancelApi = () => {
        controller.abort();
    }


    return { response, error, loading, handleGetApi,handleCancelApi }
}