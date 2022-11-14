import React, { useEffect } from 'react';
import {
  TextField,
  TextFieldProps,
  useTheme,
  InputAdornment,
} from '@mui/material';
import { Label, LabelProps } from '../label/Label';
import { Search, Public } from '@mui/icons-material';
import {
  Control,
  Controller,
  ControllerProps,
  FieldError,
  Path,
} from 'react-hook-form';
import { FieldValues } from 'react-hook-form/dist/types/fields';
import { StyledTextField, iconsTypes } from './TextInputField';

export type HookFormTextedFieldProps<T extends FieldValues = FieldValues> =
  Omit<TextFieldProps, 'name'> &
    LabelProps & {
      validation?: ControllerProps['rules'];
      name: Path<T>;
      //   parseError?: (error: FieldError) => string;
      control?: Control<T>;
      hasLabel?: boolean;
      hasIcon?: boolean;
      inputIconType?: iconsTypes;
      iconPosition?: 'end' | 'start';
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
  hasIcon,
  inputIconType,
  iconPosition,
  multiline,
  rows = 6,
  ...rest
}: HookFormTextedFieldProps<TFieldValues>): JSX.Element {
  //   if (required && !validation.required) {
  //     validation.required = 'This field is required';
  //   }

  const theme = useTheme();
  const icon =
    inputIconType === 'search' ? (
      <Search htmlColor={theme.palette.core?.neutralN100} />
    ) : (
      <Public htmlColor={theme.palette.core?.neutralN100} />
    );

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
            id={name}
            multiline={multiline}
            rows={rows}
            fullWidth
            name={name}
            value={value ?? ''}
            onChange={(ev) => {
              onChange(ev);
              if (typeof rest.onChange === 'function') {
                rest.onChange(ev);
              }
            }}
            InputProps={{
              startAdornment: iconPosition === 'start' && (
                <InputAdornment position='start'>
                  {hasIcon && icon}
                </InputAdornment>
              ),
              endAdornment: iconPosition === 'end' && (
                <InputAdornment position='start'>
                  {hasIcon && icon}
                </InputAdornment>
              ),
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
