import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Box } from "@mui/material";
import { useForm } from "react-hook-form";

import { ThemeProvider } from "../../utils/ThemeProvider";
import { HookFormRadio } from "../../components/radio/HookFormRadio";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Example/radio",
  component: HookFormRadio,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} as ComponentMeta<typeof HookFormRadio>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof HookFormRadio> = (args) => {
  const { control } = useForm();

  return (
    <ThemeProvider>
      <form>
        <Box sx={{ width: "500px" }}>
          <HookFormRadio
            control={control}
            name="test"
            label="test"
            options={[
              { label: "male", value: "male" },
              { label: "female", value: "female" },
            ]}
          />
        </Box>
      </form>
    </ThemeProvider>
  );
};

export const HookFormRadioStory = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
HookFormRadioStory.args = {};
