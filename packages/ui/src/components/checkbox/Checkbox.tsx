import * as React from "react";
import { Checkbox as MuiCheckbox, FormControlLabelProps } from "@mui/material";
import { FormControl } from "../formControl/FormControl";

export interface CheckboxProps {
  label: string;
  checked: boolean;
  onChange: (
    event: React.ChangeEvent<HTMLInputElement>,
    checked: boolean
  ) => void;
}

export const Checkbox = ({ label, checked, onChange }: CheckboxProps) => {
  return (
    <FormControl
      label={label}
      formControlLabelProps={
        <MuiCheckbox checked={checked} onChange={onChange} value={checked} />
      }
    />
  );
};
