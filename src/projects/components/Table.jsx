import { Table as ReactTable } from "react-bootstrap";
import useTable from "../hooks/useTable";
import Button from "./Button";

export default function Table({ headers, data, idKey }) {
  const { handleAdd, handleDelete, value } = useTable(data);
  return (
    <ReactTable striped bordered hover>
      <thead>
        <TableHeader headers={headers} />
      </thead>
      <tbody>
        <TableBody data={data} headers={headers} />
      </tbody>
    </ReactTable>
  );
}

function TableBody({ data, headers }) {
  return (
    <>
      {data &&
        data.map((dataObj, dataIndex) => {
          return (
            <tr key={dataIndex}>
              {console.log(data)}
              {headers &&
                headers.map((headerObj, index) => {
                  return <td key={index}>{dataObj[headerObj.key]}</td>;
                })}
              <Button
                label={"Delete"}
                onClick={(e) => handleDelete(e, data, idKey, dataObj[idKey])}
              ></Button>
            </tr>
          );
        })}
    </>
  );
}

function TableHeader({ headers }) {
  return (
    <>
      <tr>
        {headers &&
          headers.map((obj, index) => {
            return <th key={index}>{obj.label}</th>;
          })}
      </tr>
    </>
  );
}
