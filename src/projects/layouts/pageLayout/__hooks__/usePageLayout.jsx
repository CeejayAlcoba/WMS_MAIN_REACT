import { useState, useEffect } from "react";
import useWindowWidth from "../../../hooks/useWindowWidth";

export default function usePageLayout(){
  const { windowWidth } = useWindowWidth();
    const [open, setOpen] = useState();

    useEffect(()=>{
      const isOpen = windowWidth > 768 ? true:false;
      setOpen(isOpen)
      console.log(windowWidth)
    },[windowWidth])
  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return {open,handleDrawerOpen,handleDrawerClose}
}