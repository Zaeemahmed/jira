import React from 'react';
import {
  FieldValues,
  Path,
  Control,
  PathValue,
  Controller,
} from 'react-hook-form';
import { TextFieldProps } from '@mui/material';
import { DatePickerProps, Datepicker } from './datepicker';
import { Label } from '../label/Label';
import { StyledTextField } from './datepicker.styles';

export type DatePickerElementProps<
  T extends FieldValues,
  TInputDate,
  TDate = TInputDate,
> = Omit<
  DatePickerProps<TInputDate, TDate>,
  'value' | 'onChange' | 'renderInput'
> & {
  name: Path<T>;
  required?: boolean;
  isDate?: boolean;
  onChange?: (value: TDate, keyboardInputValue?: string) => void;
  control?: Control<T>;
  helperText?: TextFieldProps['helperText'];
  defaultValue?: PathValue<T, Path<T>>;
};

export function HookFormDatePicker<T extends FieldValues>({
  name,
  control,
  required,
  defaultValue,
  ...rest
}: DatePickerElementProps<T, any, any>) {
  return (
    <>
      <Label labelText='Start date' />
      <Controller
        name={name}
        control={control}
        defaultValue={defaultValue}
        render={({ field: { onChange, value }, fieldState: { error } }) => (
          <Datepicker
            renderInput={(params: TextFieldProps) => (
              <StyledTextField {...params} />
            )}
            value={value || ''}
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
              if (typeof rest.onChange === 'function') {
                rest.onChange(newValue, keyboardInputValue);
              }
            }}
          />
        )}
      />
    </>
  );
}
