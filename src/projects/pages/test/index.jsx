import { useState } from "react";
import useURLSearchParams from "../../hooks/useURLSearhParams";
import useTest from "./__hooks__/useTest";
import Test2 from "./test2";

export default function Test({ user }) {
  const { data } = useTest();
  const { urlSearchParams, getSearchParam, handleUpdateSearchParam } =
    useURLSearchParams();
  const [searchData, setSearchData] = useState({
    name: getSearchParam("name", ""),
    lastname: getSearchParam("lastname", ""),
  });

  return (
    <>
      {/* { JSON.stringify(data)}
        {urlSearchParams}
        <div className="border border-dark">{JSON.stringify(user)}</div>
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
            /> */}
    </>
  );
}
