import { TextFieldProps } from "@mui/material";
import React from "react";
import { Control, Controller } from "react-hook-form";
import { Checkbox, CheckboxProps } from "./Checkbox";

export type CheckboxElementProps = Omit<
  CheckboxProps,
  "checked" | "onChange"
> & {
  name: string;
  required?: boolean;
  onChange?: (option: string) => void;
  control?: Control;
  helperText?: TextFieldProps["helperText"];
  defaultValue?: string;
};


export function HookFormCheckbox({
  name,
  control,
  required,
  defaultValue,
  label,
  ...rest
}: CheckboxElementProps) {
  return (
    <Controller
      name={name}
      control={control}
      defaultValue={defaultValue}
      render={({ field: { onChange, value }, fieldState: { error } }) => (
        <Checkbox
          checked={value}
          onChange={(event, checked) => {
            onChange(checked);
          }}
          label={label}
        />
      )}
    />
  );
}
