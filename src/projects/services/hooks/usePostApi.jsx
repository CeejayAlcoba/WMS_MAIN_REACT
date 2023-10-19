import axios from "axios";
import { useState } from "react";

export default function usePostApi() {
    const [response, setResponse] = useState();
    const [error, setError] = useState();
    const [loading, setLoading] = useState(false);
    const controller = new AbortController();

    const handlePostApi = (url,data) => {
        axios.post(url, data,{
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


    return { response, error, loading, handlePostApi,handleCancelApi }
}