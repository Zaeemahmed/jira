import React from 'react';
import { Label, LabelProps } from '../label/Label';
import {
  TextField,
  styled,
  TextFieldProps,
  InputAdornment,
} from '@mui/material';
import { Search, Public } from '@mui/icons-material';

type TextInputProps = LabelProps &
  TextFieldProps & {
    hasLabel: boolean;
  };

export const StyledTextField = styled(TextField)(({ theme }) => ({
  '& .MuiOutlinedInput-root': {
    fontSize: '14px',
    fontWeight: theme.typography.fontWeightRegular,
    color: theme.palette.core?.neutralN900,
    '& input': {
      padding: '10px 8px',
    },
    marginTop: '4px',
    '& fieldset': {
      border: `2px solid ${theme.palette.core?.neutralN40}`,
    },
    '&:hover fieldset': {
      borderColor: `${theme.palette.core?.neutralN40}`,
    },
    '&.Mui-focused fieldset': {
      borderColor: `${theme.palette.core?.lightBlue}`,
    },
    '	.MuiIcon-colorPrimary': {
      '& svg': {
        color: theme.palette.core?.neutralN100,
      },
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
  type,
  required,
  error,
  disabled,
  ...rest
}: TextInputProps) {
  return (
    <>
      {hasLabel && <Label labelText={labelText} htmlFor={name} />}
      <StyledTextField
        InputProps={{
          startAdornment: (
            <InputAdornment position='start'>
              <Search />
            </InputAdornment>
          ),
        }}
        {...rest}
        id={name}
        fullWidth
        placeholder={placeholder}
        onChange={onChange}
        onBlur={onBlur}
        value={value}
        type={type}
        error={error}
        disabled={disabled}
        required={required}
      />
    </>
  );
}
