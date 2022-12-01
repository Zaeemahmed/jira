import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Flags } from '../../components/Flags';
import { ThemeProvider } from '../../utils/ThemeProvider';
import { SuccessIcon } from '../../components/Icons';
import { theme } from '../../utils/theme';

export default {
  title: 'Example/Flags',
  component: Flags,
  argTypes: {},
} as ComponentMeta<typeof Flags>;

const Template: ComponentStory<typeof Flags> = (args) => (
  <ThemeProvider>
    <Flags {...args} />
  </ThemeProvider>
);

export const FlagsStory = Template.bind({});

FlagsStory.args = {
  appearance: 'normal',
  title: 'Good news, everyone',
  description: 'Nothing to worry about, everything is going great!',
  type: 'default',
  icon: <SuccessIcon primaryColor={theme.palette.core.GreenG300} />,
  userAction: [
    {
      content: 'View issue',
      onClick: () => {
        console.log('flag action clicked');
      },
    },
    {
      content: 'Add to next sprint',
      href: '/components/flag/examples#actions',
    },
  ],
};
