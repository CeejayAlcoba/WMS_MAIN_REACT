import { useState } from "react";

export default function useRoute(){
    const[user,setUser]=useState();

    const handleSetUser=(value)=>{
        setUser(value);
    }
    return {user,handleSetUser}
}