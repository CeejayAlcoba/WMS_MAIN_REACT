import { useLocation, useNavigate } from "react-router-dom";

export default function useURLSearchParams() {

    const location = useLocation();
    const navigate = useNavigate();

    const urlSearchParams = new URLSearchParams(location.search).toString();
    const getSearchParam = (key,defaultValue) => {
        const searchParams = new URLSearchParams(location.search);
        return searchParams.get(key)||defaultValue;
    }

    const handleUpdateSearchParam = (data) => {
        const params = new URLSearchParams(data);
        const newLocation = {
            pathname: location.pathname,
            search: "?" + params.toString(),
        };
        navigate(newLocation);
    }

    return {urlSearchParams, getSearchParam, handleUpdateSearchParam }
}