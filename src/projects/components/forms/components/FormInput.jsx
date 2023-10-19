import { FormControl, TextField } from "@mui/material";

export default function FormInput({label,name,value,onChange,className,isRequired,type}){

    return(
    <>
     <FormControl>
          <TextField
            type={type?type:"text"}
            label={label&&label}
            name={name&&name}
            value={value&&value}
            onChange={onChange&&onChange}
            required={isRequired?isRequired:false}
            className={className&&className}
          />
        </FormControl>
    </>
    )
}