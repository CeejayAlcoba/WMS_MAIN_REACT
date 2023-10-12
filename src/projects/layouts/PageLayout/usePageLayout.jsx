import { useState, useEffect } from "react";

export default function usePageLayout(){
    const [open, setOpen] = useState();
  useEffect(() => {
    const handleResize = () => {
      setOpen(window.innerWidth > 768);
    };

    // Add event listener to listen for window resize
    window.addEventListener('resize', handleResize);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []); 

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return {open,handleDrawerOpen,handleDrawerClose}
}