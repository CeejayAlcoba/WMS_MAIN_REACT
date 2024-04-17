import { FormControl, TextField } from "@mui/material";

export default function FormInput({
  label,
  name,
  value,
  onChange,
  className,
  isRequired,
  type,
}) {
  return (
    <>
      <FormControl>
        <TextField
          type={type ?? "text"}
          label={label}
          name={name}
          value={value}
          onChange={onChange}
          required={isRequired ?? false}
          className={className}
        />
      </FormControl>
    </>
  );
}

<input required={true} />;
