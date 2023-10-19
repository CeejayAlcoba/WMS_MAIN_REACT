import { useLocation, useNavigate } from "react-router-dom";

export default function useURLSearchParams() {

    const location = useLocation();
    const navigate = useNavigate();

    const getSearchParam = (key) => {
        const searchParams = new URLSearchParams(location.search);
        return searchParams.get(key);
    }

    const handleUpdateSearchParam = (data) => {
        const params = new URLSearchParams(data);
        const newLocation = {
            pathname: location.pathname,
            search: "?" + params.toString(),
        };
        navigate(newLocation);
    }

    return { getSearchParam, handleUpdateSearchParam }
}