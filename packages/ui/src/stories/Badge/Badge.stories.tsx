import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Badge } from '../../components/Badge/';
import { ThemeProvider } from '../../utils/ThemeProvider';

export default {
  title: 'Example/Badge',
  component: Badge,
  argTypes: {},
} as ComponentMeta<typeof Badge>;

const Template: ComponentStory<typeof Badge> = (args) => (
  <ThemeProvider>
    <Badge {...args} />
  </ThemeProvider>
);

export const BadgeStory = Template.bind({});

BadgeStory.args = {
  appearance: 'default',
  children: 25,
};
