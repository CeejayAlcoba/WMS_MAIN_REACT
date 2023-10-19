import { useState } from "react";
import useURLSearchParams from "../../hooks/useURLSearhParams";
import { useEffect } from "react";
import useGetApi from "../../services/hooks/useGetApi";
import { getFakeApi } from "../../services/apis/FakeApi";
import { json } from "react-router-dom";

export default function Test() {
    const [searchData, setSearchData] = useState({
        name: "",
        lastname: "",
    });
    const { getSearchParam, handleUpdateSearchParam } = useURLSearchParams();
    const { response, error, loading, handleGetApi, handleCancelApi } = useGetApi();

    useEffect(() => {
        setSearchData({
            name: getSearchParam("name") ?? "",
            lastname: getSearchParam("lastname") ?? ""
        })

        /// test get api
        handleGetApi(getFakeApi(1));

        return ()=>{
        
        }

    }, [])

    return (
        <>
        {JSON.stringify(response) }
            <input
                type="text"
                placeholder="Name"
                value={searchData.name}
                onChange={(e) => [
                    setSearchData({ ...searchData, name: e.target.value }),
                    handleUpdateSearchParam({ ...searchData, name: e.target.value }),
                ]}
            />
            <input
                type="text"
                placeholder="Last Name"
                value={searchData.lastname}
                onChange={(e) => [
                    setSearchData({ ...searchData, lastname: e.target.value }),
                    handleUpdateSearchParam({ ...searchData, lastname: e.target.value }),
                ]}
            />

        </>
    )
}