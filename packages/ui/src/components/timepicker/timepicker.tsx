import * as React from "react";
import { TextField } from "@mui/material";
import { StyledPopperBox, StyledPopper, Option } from "./timepicker.styles";

export interface TimepickerProps {
  timeOptions: Array<string>;
  onClick: (option: string) => void;
  value: string;
}

const Timepicker = ({ timeOptions, onClick, value }: TimepickerProps) => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(anchorEl ? null : event.currentTarget);
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popper" : undefined;

  return (
    <div>
      <TextField onClick={handleClick} value={value} />
      <StyledPopper
        id={id}
        open={open}
        anchorEl={anchorEl}
        placement="bottom-end"
      >
        <StyledPopperBox>
          {timeOptions.map((option) => (
            <Option
              onClick={() => {
                onClick(option);
                setAnchorEl(null);
              }}
            >
              {option}
            </Option>
          ))}
        </StyledPopperBox>
      </StyledPopper>
    </div>
  );
};

export { Timepicker };
