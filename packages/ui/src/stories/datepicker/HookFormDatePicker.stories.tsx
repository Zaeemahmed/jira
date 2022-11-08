import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { TextField, TextFieldProps } from "@mui/material";
import { useForm } from "react-hook-form";

import { Datepicker } from "../../components/datepicker";
import { HookFormDatePicker } from "../../components/datepicker/hookformdatepicker";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Example/HookFormDatepicker",
  component: HookFormDatePicker,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} as ComponentMeta<typeof HookFormDatePicker>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Datepicker> = (args) => {
  const { control } = useForm();

  return (
    <form>
      <HookFormDatePicker control={control} name="test" />
    </form>
  );
};

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {};
