import { useEffect, useState } from "react";

export default function useTable(){
 
    const [value,setValue]=useState([]);
    const [id,setId]=useState(1);

    const handleIdIncrement=()=>{
      setId(prev=>prev+1);
    }
    const handleAdd =(e,value)=>{
      handleIdIncrement();
      e.preventDefault();
      setValue(prev=>([...prev,{id:id,value:value}]))
    }
    const handleDelete =(e,data,idKey,id)=>{
      e.preventDefault();
console.log(id)
      var filteredValue = data&&idKey?data.filter((obj)=>{
          
              return obj[idKey]!==id;
          }):[];


        
      setValue(filteredValue)
    }
    return {handleAdd,handleDelete,value}
}