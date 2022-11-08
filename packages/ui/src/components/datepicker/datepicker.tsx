import React from "react";
import { DatePickerProps as MuiDatePickerProps } from "@mui/x-date-pickers";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { SxProps } from "@mui/material/styles";

import { StyledDatePicker } from "./datepicker.styles";

export interface DatePickerProps<TInput, TDate> {
  onChange?: MuiDatePickerProps<TDate, TInput>["onChange"];
  value?: MuiDatePickerProps<TDate, TInput>["value"];
  renderInput: MuiDatePickerProps<TDate, TInput>["renderInput"];
  onOpen?: MuiDatePickerProps<TDate, TInput>["onOpen"];
  onClose?: MuiDatePickerProps<TDate, TInput>["onClose"];
  open?: MuiDatePickerProps<TDate, TInput>["open"];
  PopperProps?: MuiDatePickerProps<TDate, TInput>["PopperProps"];
}

export function Datepicker<TInput, TDate>({
  value,
  onChange,
  onClose,
  onOpen,
  open,
  renderInput,
}: DatePickerProps<TInput, TDate>): JSX.Element {
  const sxProps: SxProps = {
    "& .MuiPaper-root": {
      marginTop: "10px",
    },
  };
  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <StyledDatePicker
        renderInput={renderInput}
        value={value}
        open={open}
        onClose={onClose}
        onOpen={onOpen}
        onChange={onChange}
        PopperProps={{
          sx: sxProps,
          disablePortal: true,
          placement: "bottom-end",
        }}
      />
    </LocalizationProvider>
  );
}
