import { useCallback, useEffect, useState } from "react";

export default function useButton(){
    const logger = useCallback(()=>{
        console.log("button loaded!")
    },[])
    const handleClick=(e)=>{
        e.preventDefault();
        console.log("button clicked!")
    }
    return {handleClick,logger}
}