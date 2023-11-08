import { useState } from "react";

export default function useUser(){
    const token = localStorage.getItem("token");
    
    const [user,setUser]=useState(token);
    const handleSetUser=(value)=>{
        setUser(value??token);
    }

    return {user,handleSetUser}
}