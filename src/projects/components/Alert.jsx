import { Alert as MUIAlert } from "@mui/material";

export default function Alert({ children, variant, severity,className }) {
  return (
    <MUIAlert
      variant={variant ? variant : "outlined"}
      severity={severity ? severity : "success"}
      className={className&&className}
    >
      {children}
    </MUIAlert>
  );
}
