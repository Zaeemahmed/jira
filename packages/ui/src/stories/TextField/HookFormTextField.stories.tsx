import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Box } from '@mui/material';
import { useForm } from 'react-hook-form';
import { HookFormTextedField } from '../../components/TextField/HookFormTextedField';
import { ThemeProvider } from '../../utils/ThemeProvider';

export default {
  title: 'Example/hookFormTextField',
  component: HookFormTextedField,
  argTypes: {},
} as ComponentMeta<typeof HookFormTextedField>;

const Template: ComponentStory<typeof HookFormTextedField> = (args) => {
  const { control, handleSubmit } = useForm();
  const onSubmit = (data: any) => console.log(data);

  return (
    <ThemeProvider>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Box sx={{ width: '500px' }}>
          <HookFormTextedField
            {...args}
            labelText='Text'
            control={control}
            name='test'
          />
        </Box>
        <input type='submit' />
      </form>
    </ThemeProvider>
  );
};

export const HookFormTextFieldStory = Template.bind({});

HookFormTextFieldStory.args = {
  hasLabel: false,
  hasIcon: false,
  inputIconType: 'search',
};
