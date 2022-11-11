import { styled, TextField } from "@mui/material";
import { DatePicker } from "@mui/x-date-pickers";
import { DatePickerProps } from "./datepicker";

export const StyledDatePicker = styled<DatePickerProps>(DatePicker)(
  ({ theme }) => ({
    width: "100%",
  })
);

export const StyledTextField = styled(TextField)(({}) => ({
  height: "40px",
  "& .MuiInputBase-root": {
    height: "inherit",
  },
}));
