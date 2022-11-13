import React from 'react';
import { Label, LabelProps } from '../label/Label';
import {
  TextField,
  styled,
  TextFieldProps,
  InputAdornment,
  useTheme,
} from '@mui/material';
import { Search, Public } from '@mui/icons-material';

export type iconsTypes = 'search' | 'public';

type TextInputProps = LabelProps &
  TextFieldProps & {
    hasLabel?: boolean;
    hasIcon?: boolean;
    inputIconType?: iconsTypes;
    iconPosition: 'end' | 'start';
  };

export const StyledTextField = styled(TextField)(({ theme }) => ({
  '& .MuiOutlinedInput-root': {
    fontSize: '14px',
    fontWeight: theme.typography.fontWeightRegular,
    color: theme.palette.core?.neutralN900,
    paddingLeft: '8px',
    '& input': {
      padding: '10px 6px',
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
    '.MuiInputAdornment-root': {
      marginRight: '0',
    },
  },
}));

export function TextInputField({
  labelText,
  hasLabel,
  hasIcon,
  name,
  placeholder,
  onChange,
  onBlur,
  value,
  type,
  required,
  error,
  disabled,
  inputIconType,
  iconPosition,
  ...rest
}: TextInputProps) {
  const theme = useTheme();
  const icon =
    inputIconType === 'search' ? (
      <Search htmlColor={theme.palette.core?.neutralN100} />
    ) : (
      <Public htmlColor={theme.palette.core?.neutralN100} />
    );
  return (
    <>
      {hasLabel && <Label labelText={labelText} htmlFor={name} />}
      <StyledTextField
        InputProps={{
          startAdornment: iconPosition === 'start' && (
            <InputAdornment position='start'>{hasIcon && icon}</InputAdornment>
          ),
          endAdornment: iconPosition === 'end' && (
            <InputAdornment position='start'>{hasIcon && icon}</InputAdornment>
          ),
        }}
        {...rest}
        id={name}
        fullWidth
        placeholder={placeholder}
        onChange={onChange}
        onBlur={onBlur}
        value={value ?? ''}
        type={type}
        error={error}
        disabled={disabled}
        required={required}
      />
    </>
  );
}
