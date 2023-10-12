import { Alert as MUIAlert } from "@mui/material";

export default function Alert({ children, variant, severity,sx }) {
  return (
    <MUIAlert
      variant={variant ? variant : "outlined"}
      severity={severity ? severity : "success"}
      sx={sx&&sx}
    >
      {children}
    </MUIAlert>
  );
}
