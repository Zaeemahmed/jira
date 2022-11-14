import React, { useState } from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Timepicker } from "../../components/timepicker/timepicker";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Example/timepicker",
  component: Timepicker,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} as ComponentMeta<typeof Timepicker>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Timepicker> = (args) => {
  const [value, setValue] = useState("");

  const onClick = (option: string) => {
    setValue(option);
  };
  return <Timepicker {...args} value={value} onClick={onClick} />;
};

export const TimepickerStory = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
TimepickerStory.args = {
  timeOptions: [
    "9:00 AM",
    "9:30 AM",
    "10:00 AM",
    "10:30 AM",
    "11:00 AM",
    "11:30 AM",
    "12:00 AM",
    "12:30 AM",
  ],
};
