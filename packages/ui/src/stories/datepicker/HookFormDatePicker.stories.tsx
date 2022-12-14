import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Box } from "@mui/material";
import { useForm } from "react-hook-form";

import { HookFormDatePicker } from "../../components/datepicker/hookformdatepicker";
import { ThemeProvider } from "../../utils/ThemeProvider";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Example/datepicker",
  component: HookFormDatePicker,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} as ComponentMeta<typeof HookFormDatePicker>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof HookFormDatePicker> = (args) => {
  const { control } = useForm();

  return (
    <ThemeProvider>
      <form>
        <Box sx={{ width: "500px" }}>
          <HookFormDatePicker
            control={control}
            name="test"
            defaultValue={new Date()}
          />
        </Box>
      </form>
    </ThemeProvider>
  );
};

export const HookFormDatePickerStory = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
HookFormDatePickerStory.args = {};
