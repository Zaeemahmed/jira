import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { useForm } from "react-hook-form";

import { HookFormTimePicker } from "../../components/timepicker/hookformtimepicker";
import { ThemeProvider } from "../../utils/ThemeProvider";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Example/HookFormTimepicker",
  component: HookFormTimePicker,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} as ComponentMeta<typeof HookFormTimePicker>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof HookFormTimePicker> = (args) => {
  const { control, watch } = useForm();

  console.log(watch("test")); 
  return (
    <ThemeProvider>
      <form>
        <HookFormTimePicker
          name="test"
          control={control}
          timeOptions={[
            "9:00 AM",
            "9:30 AM",
            "10:00 AM",
            "10:30 AM",
            "11:00 AM",
            "11:30 AM",
            "12:00 AM",
            "12:30 AM",
          ]}
        />
      </form>
    </ThemeProvider>
  );
};

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {};
