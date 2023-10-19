import axios from "axios";
import { useState } from "react";

export default function usePatchApi() {
    const [response, setResponse] = useState();
    const [error, setError] = useState();
    const [loading, setLoading] = useState(false);
    const controller = new AbortController();

    const handlePathApi = (url,data) => {
        axios.patch(url, data, {
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


    return { response, error, loading, handlePathApi,handleCancelApi }
}