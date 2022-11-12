import React from 'react';
import { TextField, TextFieldProps } from '@mui/material';
import { Label, LabelProps } from '../label/Label';
import {
  Control,
  Controller,
  ControllerProps,
  FieldError,
  Path,
} from 'react-hook-form';
import { FieldValues } from 'react-hook-form/dist/types/fields';
import { StyledTextField } from './TextInputField';

export type HookFormTextedFieldProps<T extends FieldValues = FieldValues> =
  Omit<TextFieldProps, 'name'> &
    LabelProps & {
      validation?: ControllerProps['rules'];
      name: Path<T>;
      //   parseError?: (error: FieldError) => string;
      control?: Control<T>;
      hasLabel: boolean;
    };

export function HookFormTextedField<
  TFieldValues extends FieldValues = FieldValues,
>({
  labelText,
  validation = {},
  //   parseError,
  type,
  required,
  name,
  control,
  hasLabel,
  fullWidth,
  disabled,
  ...rest
}: HookFormTextedFieldProps<TFieldValues>): JSX.Element {
  //   if (required && !validation.required) {
  //     validation.required = 'This field is required';
  //   }

  if (type === 'email' && !validation.pattern) {
    validation.pattern = {
      value:
        /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
      message: 'Please enter a valid email address',
    };
  }

  return (
    <>
      {hasLabel && <Label htmlFor={name} labelText={labelText} />}
      <Controller
        name={name}
        control={control}
        rules={validation}
        render={({
          field: { value, onChange, onBlur },
          fieldState: { error },
        }) => (
          <StyledTextField
            {...rest}
            fullWidth
            name={name}
            value={value ?? ''}
            onChange={(ev) => {
              onChange(ev);
              if (typeof rest.onChange === 'function') {
                rest.onChange(ev);
              }
            }}
            onBlur={onBlur}
            required={required}
            type={type}
            error={!!error}
            disabled={disabled}
            // helperText={
            //   error
            //     ? typeof parseError === 'function'
            //       ? parseError(error)
            //       : error.message
            //     : rest.helperText
            // }
          />
        )}
      />
    </>
  );
}
