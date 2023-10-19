import apiEntryPoint from "../configuration/ApiEntryPoint";

const entryPoint = apiEntryPoint;
const endPoint = '/todos'
const getFakeApi = (id) => {
    return `${entryPoint + endPoint}/${id}`;
}

export { getFakeApi }