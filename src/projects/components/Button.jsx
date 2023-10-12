import { Button as MUIButton} from "@mui/material";
import Progress from "./Progress";


export default function Button({type,variant,color,label,sx,isLoading,startIcon}){
    return (
        <>
         <MUIButton
          type={type&&type}
          variant={variant?variant:"contained"}
          color={color?color:"primary"}
          sx={sx&&sx}
          disabled ={isLoading}
          startIcon={isLoading?<Progress size={20}/>: startIcon&&startIcon}
        >
          {label?label:"Ok"}
        </MUIButton>
        </>
    )
}