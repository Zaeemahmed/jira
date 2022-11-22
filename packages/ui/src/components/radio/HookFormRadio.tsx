import { TextFieldProps } from "@mui/material";
import React from "react";
import { Control, Controller } from "react-hook-form";
import { RadioGroup, RadioProps } from "./Radio";

export type CheckboxElementProps = Omit<RadioProps, "value" | "onChange"> & {
  name: string;
  required?: boolean;
  control?: Control;
  helperText?: TextFieldProps["helperText"];
  defaultValue?: string;
};

export function HookFormRadio({
  name,
  control,
  required,
  defaultValue,
  label,
  options,
  ...rest
}: CheckboxElementProps) {
  return (
    <Controller
      name={name}
      control={control}
      defaultValue={defaultValue}
      render={({ field: { onChange, value }, fieldState: { error } }) => (
        <RadioGroup
          value={value}
          onChange={onChange}
          options={options}
          label={label}
        />
      )}
    />
  );
}
