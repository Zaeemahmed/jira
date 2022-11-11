import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Box } from "@mui/material";
import { useForm } from "react-hook-form";

import { ThemeProvider } from "../../utils/ThemeProvider";
import { HookFormCheckbox } from "../../components/checkbox/HookformCheckbox";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Example/checkbox",
  component: HookFormCheckbox,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} as ComponentMeta<typeof HookFormCheckbox>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof HookFormCheckbox> = (args) => {
  const { control } = useForm();

  return (
    <ThemeProvider>
      <form>
        <Box sx={{ width: "500px" }}>
          <HookFormCheckbox control={control} name="test" label="test" />
        </Box>
      </form>
    </ThemeProvider>
  );
};

export const HookFormCheckboxStory = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
HookFormCheckboxStory.args = {};
