import React from "react";
import {
  FieldValues,
  Path,
  Control,
  FieldError,
  Controller,
} from "react-hook-form";
import { TextFieldProps, TextField } from "@mui/material";
import { DatePickerProps, Datepicker } from "./datepicker";

export type DatePickerElementProps<
  T extends FieldValues,
  TInputDate,
  TDate = TInputDate
> = Omit<
  DatePickerProps<TInputDate, TDate>,
  "value" | "onChange" | "renderInput"
> & {
  name: Path<T>;
  required?: boolean;
  isDate?: boolean;
  parseError?: (error: FieldError) => string;
  onChange?: (value: TDate, keyboardInputValue?: string) => void;
  parseDate?: (value: TDate, keyboardInputValue?: string) => TDate;
  control?: Control<T>;
  helperText?: TextFieldProps["helperText"];
};

export function HookFormDatePicker<T extends FieldValues>({
  name,
  control,
  required,
  ...rest
}: DatePickerElementProps<T, any, any>) {
  return (
    <Controller
      name={name}
      control={control}
      render={({ field: { onChange, value }, fieldState: { error } }) => (
        <Datepicker
          renderInput={(params: TextFieldProps) => <TextField {...params} />}
          value={value || ""}
          onChange={(value, keyboardInputValue) => {
            let newValue: undefined | string = undefined;
            // if (keyboardInputValue) {
            //   if (typeof parseDate === "function") {
            //     newValue = parseDate(value, keyboardInputValue);
            //   } else {
            //     newValue = keyboardInputValue;
            //   }
            // } else {
            //   if (typeof parseDate === "function") {
            //     newValue = parseDate(value);
            //   } else {
            //     newValue = value;
            //   }
            // }
            newValue = value as string;
            onChange(newValue, keyboardInputValue);
            if (typeof rest.onChange === "function") {
              rest.onChange(newValue, keyboardInputValue);
            }
          }}
        />
      )}
    />
  );
}
