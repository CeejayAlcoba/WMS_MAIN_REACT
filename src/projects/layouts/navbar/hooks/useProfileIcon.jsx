import { useState } from "react";

export default function useProfileIcon(){
    const [anchorEl, setAnchorEl] =useState(null);

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return {anchorEl,handleMenu,handleClose}
}