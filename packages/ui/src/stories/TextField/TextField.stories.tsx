import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { TextField, TextFieldProps } from '@mui/material';

import { TextInputField } from '../../components/TextField/';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Example/TextInput',
  component: TextInputField,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} as ComponentMeta<typeof TextInputField>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof TextInputField> = (args) => (
  <TextInputField {...args} />
);

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
  inputPlaceHolder: 'Text',
  hasLabel: false,
  labelText: 'Text Field',
  name: 'Text Field',
};
