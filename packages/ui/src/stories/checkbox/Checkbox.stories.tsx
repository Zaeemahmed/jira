import React, { useState } from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { TextField, TextFieldProps } from "@mui/material";

import { Datepicker } from "../../components/datepicker";
import { Checkbox } from "../../components/checkbox/Checkbox";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Example/checkbox",
  component: Checkbox,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} as ComponentMeta<typeof Checkbox>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Checkbox> = (args) => {
  const [checked, setChecked] = useState(false);

  return (
    <Checkbox
      {...args}
      label="test"
      checked={checked}
      onChange={(e, v) => {
        setChecked(v);
      }}
    />
  );
};

export const CheckboxStory = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
CheckboxStory.args = {};
