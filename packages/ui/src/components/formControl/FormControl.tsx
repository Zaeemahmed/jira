import * as React from "react";
import {
  FormControlLabel,
  FormGroup,
  FormControlLabelProps,
} from "@mui/material";

export interface FormControlProps {
  label: string;
  formControlLabelProps: FormControlLabelProps["control"];
}

export const FormControl = ({
  label,
  formControlLabelProps,
}: FormControlProps) => {
  return (
    <FormGroup>
      <FormControlLabel control={formControlLabelProps} label={label} />
    </FormGroup>
  );
};
