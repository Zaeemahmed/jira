import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { TextField, TextFieldProps } from "@mui/material";

import { Datepicker } from "../../components/datepicker";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Example/Datepicker",
  component: Datepicker,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} as ComponentMeta<typeof Datepicker>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Datepicker> = (args) => (
  <Datepicker {...args} />
);

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
  renderInput: (params: TextFieldProps) => <TextField {...params} />,
};
