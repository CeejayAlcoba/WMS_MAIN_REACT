import { useState } from "react";
import useToken from "./useToken";

export default function useUser(){
    const {decodedToken}=useToken();
    const [user,setUser]=useState(decodedToken);
    const handleSetUser=(value)=>{
        setUser(value??decodedToken);
    }

    return {user,handleSetUser}
}