import { TextFieldProps } from "@mui/material";
import React from "react";
import { Control, Controller } from "react-hook-form";
import { Timepicker, TimepickerProps } from "./timepicker";

export type TimePickerElementProps = Omit<
  TimepickerProps,
  "value" | "onClick"
> & {
  name: string;
  required?: boolean;
  isDate?: boolean;
  onChange?: (option: string) => void;
  control?: Control;
  helperText?: TextFieldProps["helperText"];
  defaultValue?: string;
};

export function HookFormTimePicker({
  name,
  control,
  required,
  defaultValue,
  timeOptions,
  ...rest
}: TimePickerElementProps) {
  return (
    <Controller
      name={name}
      control={control}
      defaultValue={defaultValue}
      render={({ field: { onChange, value }, fieldState: { error } }) => (
        <Timepicker
          value={value || ""}
          timeOptions={timeOptions}
          onClick={(option) => {
            let e = { target: { value: option } };
            onChange(e);
          }}
        />
      )}
    />
  );
}
