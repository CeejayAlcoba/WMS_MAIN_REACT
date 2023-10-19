import { useState, useEffect } from "react";

export default function usePageLayout(windowWidth){
    const [open, setOpen] = useState();
  useEffect(() => {
    
      setOpen(windowWidth > 768?true:false);
  
  }, [windowWidth]); 

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return {open,handleDrawerOpen,handleDrawerClose}
}