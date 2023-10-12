import { FormControl, TextField } from "@mui/material";

export default function FormInput({label,name,value,onChange,sx,isRequired,type}){

    return(
    <>
     <FormControl>
          <TextField
            type={type?type:"text"}
            label={label&&label}
            name={name&&name}
            value={value&&value}
            onChange={onChange&&onChange}
            sx={sx&&sx}
            required={isRequired?isRequired:false}
          />
        </FormControl>
    </>
    )
}