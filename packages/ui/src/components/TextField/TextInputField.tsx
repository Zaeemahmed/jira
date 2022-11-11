import React from 'react';
import { Label, LabelProps } from '../label/Label';
import { TextField, styled, TextFieldProps } from '@mui/material';

type TextInputProps = LabelProps &
  TextFieldProps & {
    hasLabel: boolean;
  };

const StyledTextField = styled(TextField)(({ theme }) => ({
  '& .MuiOutlinedInput-root': {
    fontSize: '14px',
    fontWeight: theme.typography.fontWeightRegular,
    color: theme.palette.core?.neutralN900 ?? '#091E42',
    '& input': {
      padding: '10px 8px',
    },
    marginTop: '4px',
    '& fieldset': {
      border: `2px solid ${theme.palette.core?.neutralN40 ?? '#DFE1E6'}`,
    },
    '&:hover fieldset': {
      borderColor: `${theme.palette.core?.neutralN40 ?? '#DFE1E6'}`,
    },
    '&.Mui-focused fieldset': {
      borderColor: `${theme.palette.core?.lightBlue ?? '#4C9AFF'}`,
    },
  },
}));

export function TextInputField({
  labelText,
  hasLabel,
  name,
  placeholder,
  onChange,
  onBlur,
  value,
  ...rest
}: TextInputProps) {
  return (
    <>
      {hasLabel && <Label labelText={labelText} htmlFor={name} />}
      <StyledTextField
        {...rest}
        id={name}
        fullWidth
        placeholder={placeholder}
        onChange={onChange}
        onBlur={onBlur}
        value={value}
      />
    </>
  );
}
