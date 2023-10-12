import { CircularProgress } from "@mui/material";

export default function Progress({size}) {
    return (
      <>
      <CircularProgress size={size&&size}/>
      </>
    );
  }